const router = require('express').Router();
const notes = require('../../db/db.json');
const fs = require('fs');
const { stringify } = require('querystring');
const { response } = require('express');

router.get('/notes', (req, res) => {
  res.json(notes);
  console.log(notes);
})

router.post('/notes', (req,res) => {
  newNotes = req.body
  const data = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8')); 
  console.log(data);
  console.log(newNotes);
  data.push(newNotes);
  fs.writeFileSync('./db/db.json', JSON.stringify(data), function(error){
    if(error){
    console.error(error)};
  })
  // tells us to send data back to front end
  res.json(newNotes);
})

module.exports = router;