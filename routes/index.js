var express = require('express');
var { MongoClient } = require('mongodb')
var router = express.Router();

const title = process.env.TITLE
/* GET home page. */
router.get('/', function(req, res, next) {
  const url = process.env.URL
  const password = process.env.PASSWORD
  const user = process.env.USER
  const dbName = 'library';

  try {
    return MongoClient.connect(url, { auth: { user, password } })
      .then((client) => {
        const db = client.db(dbName)
        return db.collection('books').find().toArray()
      })
      .then(response => res.json(response))
  } catch (err) {
    console.log(err)
  }
});

module.exports = router;
