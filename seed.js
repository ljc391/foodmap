// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

var Promise = require('bluebird');
var db = require('./models');
var Restaurant = require('./models/restaurant');

var data = {
  restaurant: [
                { name: 'Thursday Kitchen',
                  lat: 40.727591,
                  lng: -73.983784,
                  address:'424 E 9th St New York',
                  description:"Korean fusion resturant.<br>Macha bread pudding is the best!!",
                  img:"./images/thursday.jpg",
                  tags:["restaurant", "korean", "desserts"],
                  rating:5,
                  price:3

                },
          { name: "K'OOK", lat: 40.726809, lng: -73.987403,

              address:'324 E 6th St New York',
              description:"Korean fusion resturant.<br>The foods are delicious and the price is cheap!<br>Must try their fired chicken and snowky~*",
              img:"./images/kook.jpg",
              tags:["restaurant", "korean", "fried", "chicken"],
              rating:5,
              price:2

          },
          { name: "Raku",
            lat: 40.726488,
            lng: -73.986686,
            address:'342 E 6th St New York',
            description:"Japanese resturant.<br>Their udon are very chewy!",
            img:"./images/raku.jpg",
            tags:["restaurant", "japanese", "udon"],
            rating:4,
            price:3

          },
          { name: "Boba Guys",
            lat: 40.720646,
            lng: -73.984627,
            address:'23 Clinton St New York',
            description:"Bubble tea <br>I love Matcha~",
            img:"./images/bobaguys.jpg",
            tags:["bubble tea", "drinks", "desserts", "matcha"],
            rating:4,
            price:1

          },
          { name: "Ise Restaurant",
            lat: 40.729107,
            lng: -73.989974,
            address:'63 Cooper Sq New York',
            description:"Japanese restaurant",
            img:"./images/ise.jpg",
            tags:["japanese" ,"restaurant", "sushi"],
            rating:3,
            price:2
          },
          { name: "MáLà Project",
            lat: 40.727126,
            lng: -73.985420,
            address:'122 1st Ave New York',
            description:"Spicy dry pot smells so good~!",
            img:"./images/mala.jpg",
            tags:["chinese", "restaurant", "spicy", "dry pot"],
            rating:3,
            price:2

          },
          { name: "Round K",
            lat: 40.718888,
            lng: -73.990880,
            address: '99 Allen St New York',
            description:"Lunch box is so cute, and jajang cover with rice is their special!",
            img:"./images/roundk.jpg",
            tags:["korean", "coffee", "breakfast", "brunch"],
            rating:4,
            price:2

          },
          { name: "The Dessert Kitchen",
            lat: 40.729159,
            lng: -74.001567 ,
              address:'192 Bleecker New York',
              description:"Famous for kanten noodle, and desserts from Hong Kong.",
              img:"./images/dessertkitchen.jpg",
              tags:["hong kong", "desserts", "ice cream", "waffle", "shaved ice", "kanten noodle"],
              rating:4,
              price:1

          },
          { name: "Fresco Gelateria",
            lat: 40.728777,   lng: -73.987184,
                          address:'138 2nd Ave New York',
              description:"Peach yogurt is my favoriate!",
              img:"./images/fresco.jpg",
              tags:["ice cream", "yogurt", "desserts"],
              rating:4,
              price:1

          },
          { name: "Blue Ribbon Fried Chicken",
            lat: 40.724507 ,  lng: -73.990895 ,
              address:'28 E 1st St New York',
              description:"",
              img:"./images/blueribbon.jpg",
              tags:["fired chicken wings" ," restaurant"],
              rating:2,
              price:2

          },
          { name: "Niu Pot",
            lat: 40.754634,  lng: -73.827717 ,

              address:'42-35 Main St Ste 1A Flushing',
              description:"The container of the hot pot can be watermelon, winter melon, and even pumpkin.",
              img:"./images/niupot.jpg",
              tags:["hot pot", "bbq", "restaurant"],
              rating:4,
              price:3

          },
          { name: "Cha Cha Matcha",
            lat: 40.720163,    lng: -73.996360 ,

              address:'373 Broome St New York',
              description:"Hot and new matcha place.",
              img:"./images/chacha.jpg",
              tags:["coffee", "matcha", "drinks"],
              rating:3,
              price:1

                      },
          { name: "Prune",
            lat:40.723843,  lng: -73.989415 ,

              address:'54 E 1st St New York',
              description:"Always full fo peoople, and their pancake is huge!",
              img:"./images/prune.jpg",
              tags:["brunch", "breakfast", "american", "restaurant"],
              rating:4,
              price:2

          },
          { name: "Lui’s Thai Food",
            lat:40.725281,  lng:  -73.987557  ,

              address:'128 E 4th St New York',
              description:"Crispy duck with fried basil is their special.",
              img:"./images/luis.jpg",
              tags:["restaurant", "thai"],
              rating:4,
              price:2

          },
          { name: "Dominique Ansel Bakery",
            lat:40.725218, lng:  -74.002911,
              address:'189 Spring St New York',
              description:"Always long line for cronut, which is the combination of the cronut croissant and begel.",
              img:"./images/dominique.jpg",
              tags:["desserts", "bakeries"],
              rating:4,
              price:2

          },
          { name: "Benemon",
            lat:40.725217, lng: -74.002906,
              address:'108 E 4th St New York',
              description:"Nice place to have Una Don!",
              img:"./images/benemon.jpg",
              tags:["japanese", "restaurant"],
              rating:3,
              price:2

          },
          { name: "The Whales",
            lat:40.719246,  lng:  -73.985180,
              address:'71 Clinton St New York',
              description:"Foods are great and drinks are special!",
              img:"./images/thewhales.jpg",
              tags:["asian", "cocktail", "bars"],
              rating:3,
              price:2

          },
          { name: "Shinbashi Sushi",
            lat:40.726014, lng:  -73.986737,
              address:'85 1st Ave New York',
              description:"Uni don is the best!",
              img:"./images/shinbashi.jpg",
              tags:["japanese", "restaurant", "sushi"],
              rating:4,
              price:2

          },
          { name: "Cupcake Market",
            lat:40.727242,  lng: -73.986635 ,

              address:'74 E 7th St New York',
              description:"Banana cupcake is my favoriate!",
              img:"./images/cupcakemarket.jpg",
              tags:["desserts", "cupcake", "bakeries"],
              rating:5,
              price:1

          },
          { name: "Freemans",
            lat:40.721980,  lng: -73.992452 ,
              address:'191 Chrystie St Ste 2F New York',
              description:"Decoration are adorable, but foods are so so...",
              img:"./images/freemans.jpg",
              tags:["brunch", "american"],
              rating:3,
              price:2

          },
          { name: "Bosie Tea Parlor",
            lat:40.731275,  lng:-74.003589 ,
              address:'10 Morton St New York',
              description:"I always have the earl grey mille crepes with tea!!",
              img:"./images/bosieteaparlor.jpg",
              tags:["desserts", "cupcake", "bakeries"],
              rating:5,
              price:2

          },
          { name: "Burger & Lobster",
            lat:40.740100,  lng: -73.993352 ,
              address:'39 W 19th St New York',
              description:"Lobster!!",
              img:"./images/burgerlobster.jpg",
              tags:["lobster roll", "burger"],
              rating:4,
              price:2

          },

        ]
};



db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(data), function (name) {
    return Promise.map(data[name], function (item) {
      return db.model(name)
      .create(item//, {
      //  include: [Place]
     // }
      );
    });
  });
})
.then(function () {
  console.log("Finished inserting data (press ctrl-c to exit)");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});