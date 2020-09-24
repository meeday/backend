const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.use("/users", require("./routes/userRoute"));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology:true,
  useCreateIndex: true
}, (err) => {
  if(err) throw err;
  console.log('MongoDB Connection Established!');
});


app.listen(PORT, () => {
  console.log(`app listening on port: ${PORT}`);
})