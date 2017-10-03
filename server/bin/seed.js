data = require('../../centros/centros.json');

const mongoose = require('mongoose');
const Center = require('../models/Center');
const dbName = 'proyecto3';
mongoose.connect(`mongodb://localhost/${dbName}`);

var centers = [];
var title = "";
var address = "";
var location = "";


for (var i = 0; i<data.graph.length; i++){
  title = data.graph[i].title;
  address = data.graph[i].address;
  location = data.graph[i].location;
  const obj = {
    title,
    address,
    location
  }
  centers.push(obj);
}

Center.create(centers, (err) => {
  if (err) { throw(err); }
  console.log(`Created ${centers.length} centers`);
});
