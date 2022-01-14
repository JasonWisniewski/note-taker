const router = require('express').Router();
const notes = require('../../db/db.json');
const fs = require('fs');
const { stringify } = require('querystring');
const { response } = require('express');
const uniqid = require('uniqid');
const { append } = require('vary');

router.get('/notes', (req, res) => {
  res.json(notes);
  console.log(notes);
})

router.post('/notes', (req,res) => {
  let newNotes = req.body
  newNotes.id = uniqid();
  // console.log(data);
  console.log(newNotes);
  notes.push(newNotes);
  fs.writeFileSync('./db/db.json', JSON.stringify(notes), function(error){
    if(error){
    console.error(error)};
  })
  // tells us to send data back to front end
  res.end();
})

app.delete('/notes:id',(req,res) => {
  
})

module.exports = router;