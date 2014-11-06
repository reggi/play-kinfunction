var moment = require("moment");
var kinfunction = require("kinfunction")

var thefifthofnovember = function(slogan, date) {
  var day = moment(new Date(date)).format("dddd");
  return slogan + " " + day + " " + process.pid;
}

var output = thefifthofnovember("remember remember", "Nov 5 2014");
console.log(output); // "remember remember Wednesday 5621"

kinfunction({
  "moment": "moment"
}, {
  "slogan": "remember remember",
  "date": "Nov 5 2014",
}, thefifthofnovember, function(err, result) {
  if (err) console.log(err);
  console.log(result); // "remember remember Wednesday 5622"
});