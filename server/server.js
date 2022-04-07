const express = require('express');
// const bodyParser = require("body-parser"); /* deprecated */
// const cors = require('cors');

const app = express();

// var corsOptions = {
//   origin: 'http://localhost:3000',
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(
  express.json()
); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({ extended: true })
); /* bodyParser.urlencoded() is deprecated */

const db = require('./src/models/index');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });

require('./src/routes/turorial.routes')(app);
require('./src/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
