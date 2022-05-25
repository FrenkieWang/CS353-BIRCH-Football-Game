const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the players
recordRoutes.route("/players").get(function (req, res) {
  let db_connect = dbo.getDb("GameCards");
  db_connect
    .collection("Cards")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a list of all the modifiers
recordRoutes.route("/modifiers").get(function (req, res) {
  let db_connect = dbo.getDb("GameCards");
  db_connect
    .collection("Modifiers")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get all the cards in the basket
recordRoutes.route("/users/basket/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("users")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
 });


// USER
// This section will help you push a card into basket.
recordRoutes.route("/users/basket/push/:id").put(function(req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
      $push: {
          Basket: {
             $each:
              [
                req.body.CardNum1,
                req.body.CardNum2,
                req.body.CardNum3,
                req.body.CardNum4,
                req.body.CardNum5
              ] 
            }
      },
  };
  db_connect
      .collection("users")
      .updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
          console.log("1 document updated");
          response.json(res);
      });
});

// This section will help you clear the basket.
recordRoutes.route("/users/basket/clear/:id").put(function(req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
      $set: {
          Basket: []
      },
  };
  db_connect
      .collection("users")
      .updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
          console.log("1 document updated");
          response.json(res);
      });
});

// This section will help you push a card out of basket.
recordRoutes.route("/users/basket/pull/:id").put(function(req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
      $pull: {
          Basket: req.body.CardNumber
      },
  };
  db_connect
      .collection("users")
      .updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
          console.log("1 document updated");
          response.json(res);
      });
});

// This section will help you get all the informations of a user.
recordRoutes.route("/users/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("users")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
 });


// // This section will help you delete a record
// recordRoutes.route("/:id").delete((req, response) => {
//     let db_connect = dbo.getDb();
//     let myquery = { _id: ObjectId( req.params.id )};
//     db_connect.collection("Cards").deleteOne(myquery, function (err, obj) {
//       if (err) throw err;
//       console.log("1 document deleted");
//       response.json(obj);
//     });
//   });


// // This section will help you create a new record.
// recordRoutes.route("/record/add").post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let myobj = {
//     name: req.body.name,
//     position: req.body.position,
//     CardNumber: req.body.CardNumber,
//     rarity: req.body.rarity,
//     score: req.body.score,
//   };
//   db_connect.collection("Cards").insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     response.json(res);
//   });
// });

// // This section will help you update a record by id.
// recordRoutes.route("/update/:id").post(function(req, response) {
//     let db_connect = dbo.getDb("GameCards");
//     let myquery = { _id: ObjectId(req.params.id) };
//     let newvalues = {
//         $set: {
//             name: req.body.name,
//             position: req.body.position,
//             CardNumber: req.body.CardNumber,
//             rarity: req.body.rarity,
//             score: req.body.score,
//         },
//     };
//     db_connect
//         .collection("Cards")
//         .updateOne(myquery, newvalues, function(err, res) {
//             if (err) throw err;
//             console.log("1 document updated");
//             response.json(res);
//         });
// });


module.exports = recordRoutes;