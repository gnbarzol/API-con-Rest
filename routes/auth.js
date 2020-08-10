const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const UsersService = require('../services/users');
const ApiKeysService = require('../services/apiKeys');

const validationHandler = require('../utils/middleware/validationHandler');

const { config } = require('../config');
const { createUserSchema } = require('../utils/schemas/users');

// Basic strategy
require('../utils/auth/strategies/basic');

function authApi(app) {
  const router = express.Router();
  app.use('/api/auth', router);

  const apiKeyService = new ApiKeysService();
  const userService = new UsersService();

  router.post('/sign-in', async function (req, res, next) {
    const { apiKeyToken } = req.body;

    if (!apiKeyToken) {
      next(boom.unauthorized('apiKeyToken is required'));
    }

    passport.authenticate('basic', function (error, user) {
      try {
        if (error || !user) {
          next(boom.unauthorized());
        }
        req.logIn(user, { session: false }, async function (error) {
          if (error) {
            next(error);
          }

          const apiKey = await apiKeyService.getApiKey({ token: apiKeyToken });

          if (!apiKey) {
            next(boom.unauthorized());
          }

          const { _id: id, name, email } = user;
          const payload = {
            sub: id,
            name,
            email,
            scopes: apiKey.scopes,
          };

          const token = jwt.sign(payload, config.authJwtSecret, {
            expiresIn: '15m',
          });

          return res.status(200).json({ token, user: { id, name, email } });
        });
      } catch (error) {
        next(error);
      }
    })(req, res, next);
  });

  router.post('/sign-up', validationHandler(createUserSchema), async function (
    req,
    res,
    next
  ) {
    const { body: user } = req;
    const { email } = user;
    try {
      const userExists = await userService.getUser({ email });
      if (!userExists) {
        const createdUserId = await userService.createUser({ user });

        res.status(201).json({
          data: createdUserId,
          message: 'user created',
        });
      }else{
        res.status(400).json({
            message: 'user already exists',
          });
      }
    } catch (error) {
      next(error);
    }
  });
}

module.exports = authApi;
