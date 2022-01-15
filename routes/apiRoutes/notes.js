const router = require('express').Router();
let notes = require('../../db/db.json');
const fs = require('fs');
const { stringify } = require('querystring');
const { response } = require('express');
const uniqid = require('uniqid');
const { append } = require('vary');
const { rawListeners } = require('process');

router.get('/notes', (req, res) => {
  res.json(notes);
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
});

router.delete('/notes/:id',(req,res) => {
  const id = req.params.id
  console.log(req.params.id);
  notes = notes.filter(note => note.id != id);

  fs.writeFileSync('./db/db.json', JSON.stringify(notes), function(error){
    if(error){
    console.error(error)};
  })

  res.json ({
    message: 'deleted',
    // change: req.params.id,
    data:id
  });
  
  res.end();
});

module.exports = router;