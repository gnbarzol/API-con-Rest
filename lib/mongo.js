const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config/index');

const USER = encodeURIComponent(config.dbUser); //La funcion encode nos garantiza que si tenemos caracteres especiales no tengamos problemas en conectarnos
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true$w=majority`;

//Contruimos la libreria de mongo
class MongoLib {
    constructor() {
        //Defino quien es el cliente
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        this.dbName = DB_NAME;
    }

    //Usaremos el patron singleton para la conexion
    connect() {
        if (!MongoLib.connection) {
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err => {
                    if (err) {
                        reject(err);
                    }
                    console.log('Connected succesfully to mongo');
                    resolve(this.client.db(this.dbName));
                });
            });
        }

        return MongoLib.connection;
    }

    //Implementamos el crud
    getAll(collection, query) {
        return this.connect().then(db => {
            return db.collection(collection).find(query).toArray();
        })
    }

    get(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).findOne({ _id: ObjectId(id)});
        })
    }

    create(collection, data) {
        return this.connect().then(db => {
            return db.collection(collection).insertOne(data);
        }).then(result => result.insertedId);
    }

    update(collection, id, data) {
        return this.connect().then(db => {
            return db.collection(collection).updateOne({ _id: ObjectId(id)}, { $set: data }, { upsert: true });
        }).then(result => result.upsertedId || id);
    }

    delete(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).deleteOne({ _id: ObjectId(id)});
        }).then(() => id);
    }
}
//Libro sobre mongodb "The Little MongoDb Book" -> https://github.com/uokesita/the-little-mongodb-book/blob/master/es/mongodb.markdown
module.exports = MongoLib;
