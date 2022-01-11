const router = require('express').Router();
const notes = require('../../db/db.json');


router.get('/notes', (req, res) => {
  res.json(notes);
  console.log(res.json(notes));
})

router.use('/notes', (req, res) => {
  console.log('idk what this does');
})

module.exports = router;