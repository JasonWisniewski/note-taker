const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes/notes');
const htmlRoutes = require('./routes/htmlRoutes/html');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`your server is at http://localhost:${PORT}`);
})