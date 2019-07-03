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

  return router;

};

module.exports = createRouter;
