var express = require('express');
var { MongoClient } = require('mongodb')
var router = express.Router();

const title = process.env.TITLE
/* GET home page. */
router.get('/', function(req, res, next) {
  router.get('/', function(req, res, next) {
    const url = process.env.URL
    const password = process.env.PASSWORD
    const user = process.env.USER
    const dbName = 'library';

    (async function mongo() {
      let client;
      try {
        client = await MongoClient.connect(url, { auth: { user, password } });
        const db = client.db(dbName)
        const response = await db.collection('books').find()
        res.json(response);
      } catch (err) {
        console.log(err)
      }
    }())
  });
});

module.exports = router;
