const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection.find().toArray()
    .then((documents) => res.json(documents))
    .catch((error) => {
      console.error(error);
      res.status(500);
      res.json({ status: 500, error: error});
    });
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection.findOne({ _id: ObjectID(id)})
    .then((result) => res.json(result))
    .catch((error) => {
      console.error(error);
      res.status(500);
      res.json({ status: 500, error: error});
    });
  });

  router.post('/', (req, res) => {
    const body = req.body;
    collection.insertOne(body)
    .then((newBooking) => res.json(newBooking.ops[0]))
    .catch((error) => {
      console.error(error);
      res.status(500);
      res.json({ status:500, error:error });
    });
  });

  router.delete('/:id', (req, res) =>{
    const id = req.params.id;
    collection.deleteOne({ _id: ObjectID(id)})
    .then( (result) => res.json(result))
    .catch((error) => {
      console.error(error);
      res.status(500);
      res.json({ status: 500, error:error });
    });
  })

  return router;

};

module.exports = createRouter;
