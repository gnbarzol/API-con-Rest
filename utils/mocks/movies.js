const moviesMock = [{
    "id": "2bb07332-7753-410b-bd16-f1abbc5757a3",
    "title": "Mr. Wrong",
    "year": 1992,
    "cover": "http://dummyimage.com/197x159.bmp/dddddd/000000",
    "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    "duration": 2006,
    "contentRating": "PG-13",
    "source": "http://comcast.net/condimentum/id/luctus.json",
    "tag": [
      "Comedy|Drama|Musical|Romance",
      "Comedy|Crime|Horror|Thriller",
      "Western",
      "Action|Adventure|Sci-Fi|IMAX"
    ]
  }, {
    "id": "11b29140-7a93-4472-b404-914ccafb2ab5",
    "title": "Camille Rewinds",
    "year": 2005,
    "cover": "http://dummyimage.com/170x125.png/ff4444/ffffff",
    "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "duration": 1992,
    "contentRating": "G",
    "source": "http://cargocollective.com/sit/amet/justo/morbi.png",
    "tag": [
      "Comedy|Romance",
      "Drama"
    ]
  }, {
    "id": "44feff3f-5cb4-49be-b1aa-b9144148bf07",
    "title": "Search for One-eye Jimmy, The",
    "year": 1998,
    "cover": "http://dummyimage.com/130x227.jpg/ff4444/ffffff",
    "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "duration": 1961,
    "contentRating": "NC-17",
    "source": "https://buzzfeed.com/nascetur/ridiculus/mus/etiam/vel.aspx",
    "tag": [
      "Action|Crime|Thriller",
      "Horror|Thriller|Western",
      "Fantasy|Horror|Sci-Fi"
    ]
  }, {
    "id": "029f5c89-41c9-4bf7-a152-475b07f82bc8",
    "title": "V/H/S/2",
    "year": 2009,
    "cover": "http://dummyimage.com/147x144.bmp/5fa2dd/ffffff",
    "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "duration": 2017,
    "contentRating": "PG-13",
    "source": "http://microsoft.com/integer/aliquet/massa/id/lobortis/convallis/tortor.json",
    "tag": [
      "Romance",
      "Action|Drama",
      "Drama",
      "Crime|Romance|Thriller",
      "Comedy"
    ]
  }, {
    "id": "cd52166f-2c1d-4d6e-90e3-8f12ab0862cf",
    "title": "Beethoven",
    "year": 1997,
    "cover": "http://dummyimage.com/142x211.jpg/5fa2dd/ffffff",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    "duration": 2011,
    "contentRating": "R",
    "source": "http://reddit.com/pulvinar/sed/nisl.xml",
    "tag": [
      "Drama",
      "Thriller",
      "Horror",
      "Comedy",
      "Drama"
    ]
  }, {
    "id": "94a38007-ae5b-469c-9073-ada17e667c97",
    "title": "Meilleur espoir féminin",
    "year": 1985,
    "cover": "http://dummyimage.com/220x134.png/dddddd/000000",
    "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "duration": 2036,
    "contentRating": "NC-17",
    "source": "http://earthlink.net/vestibulum/aliquet/ultrices.jpg",
    "tag": [
      "Drama",
      "Animation|Children|Comedy|Musical",
      "Adventure|Children|Drama|Fantasy"
    ]
  }, {
    "id": "03eae974-57c6-4c32-89cc-7dcbb5113799",
    "title": "Don't Tell Mom the Babysitter's Dead",
    "year": 2003,
    "cover": "http://dummyimage.com/233x144.jpg/5fa2dd/ffffff",
    "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "duration": 2010,
    "contentRating": "PG",
    "source": "https://statcounter.com/tempus/sit/amet.jpg",
    "tag": [
      "Comedy|Drama|War",
      "Drama|Thriller",
      "Drama",
      "Action|Adventure|Comedy|Fantasy|Horror"
    ]
  }, {
    "id": "a10a7d53-6156-484f-b1a8-13be73463a9b",
    "title": "Four Nights of a Dreamer (Quatre nuits d'un rêveur)",
    "year": 1998,
    "cover": "http://dummyimage.com/200x150.png/dddddd/000000",
    "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    "duration": 1930,
    "contentRating": "PG",
    "source": "https://woothemes.com/ut/tellus/nulla/ut.jsp",
    "tag": [
      "Musical",
      "Documentary"
    ]
  }, {
    "id": "872cceb5-a259-4c28-9dbf-7521b2d0fa0a",
    "title": "Intruder, The (L'intrus)",
    "year": 1990,
    "cover": "http://dummyimage.com/105x202.bmp/cc0000/ffffff",
    "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "duration": 1913,
    "contentRating": "NC-17",
    "source": "https://soup.io/libero/rutrum/ac/lobortis.json",
    "tag": [
      "Drama",
      "Drama|Horror",
      "Drama",
      "Horror|Mystery",
      "Documentary"
    ]
  }, {
    "id": "e852d3d9-876a-46b0-8e99-b52ae8fe26d7",
    "title": "Operation Ganymed",
    "year": 2010,
    "cover": "http://dummyimage.com/153x226.bmp/dddddd/000000",
    "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "duration": 2033,
    "contentRating": "R",
    "source": "http://dion.ne.jp/ac/neque/duis/bibendum/morbi/non.aspx",
    "tag": [
      "Drama",
      "Crime|Drama|Mystery|Thriller",
      "Comedy",
      "Comedy|Horror|Sci-Fi",
      "Drama|Romance"
    ]
  }]

module.exports = {
    moviesMock
};