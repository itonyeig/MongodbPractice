const mongoose = require('mongoose');

//connection

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    requred: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});


const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 6,
  review: "Pretty solid as a fruit."
});

//fruit.save()

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  //impeding a fruit document in favouriteFruit in person schema (establising relationships)
  favouriteFruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema)

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Really sweat fruit fruit.",

})

// pineapple.save();

const person = new Person({
  name: 'Blessing',
  age: 27,
  favouriteFruit: pineapple
});

const personJohn = new Person({
  name: 'John',
  age: 36,
});

// person.save();
// personJohn.save();

const orange = new Fruit ({
  name: 'Orange',
  rating: 9,
  review: "It was very sweet."
});

const kiwi = new Fruit ({
  name: 'kiwi',
  rating: 9.5,
  review: "Awesome Fruit."
});

kiwi.save();



// const avacado = new Fruit ({
//   name: "Avacado",
//   rating: 10,
//   review: "Now this is where the party is at."
// });

//save in bulk
// Fruit.insertMany([orange, avacado], function(error, docs) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Successfully saved all fruits to fruits db');
//   }
// })

//display fruitsDB (Read)
// Fruit.find(function(err, fruits){
//    if (err) {
//      console.log(err);
//    } else {
//      console.log(fruits);

//     mongoose.connection.close();

//      fruits.forEach(fruit => {
//        console.log(fruit.name);
//      });
//    }
// });

//Update
// Fruit.updateOne({_id: '605b17b57319dc2790180be1'}, {rating: 7}, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Updated");
//   }
// });

Person.updateOne({name: 'John'}, {favouriteFruit: kiwi}, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Kiwi added to john');
  }
});

//delete one
// Fruit.deleteOne({name: "Orange"}, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Item deleted');
//   }
// });

//delete Many
// Person.deleteMany({name:'John'}, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('All ' + Person.name +'s sucessfully deleted');
//   }
// })










