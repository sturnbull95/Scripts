
  var cheerio = require('cheerio');
  var request = require('request');
  var readline = require('readline');
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var url = "http://www.wunderground.com/weather/"
rl.question('What Country are we looking at? ', function (country) {
    rl.question('What State are we looking at? ', function (state) {
        rl.question('What City are we looking at? ', function (city) {
          url = "http://www.wunderground.com/weather/us/" + state +"/" + city;
          console.log(url)
          scrape()
          rl.close();
          process.stdin.destroy();
        });

      });
    });
    //us/ca/downey
  // var url = "http://www.wunderground.com/weather/"
  function prettyData(string){
    var count = (string.match(/\d/g) || []).length
    if(count == 4){
      string = string.substring(0,3);
    }
    else{
      string = string.substring(0,2);
    }
    return string;
  }
  function scrape(){
    request(url, function (error, response, body) {
      if (!error) {
        var $ = cheerio.load(body);
        var rain = $("#precipBarChart > svg");
        var high = $("span.hi").html();
        high = prettyData(high);
        var low = $("span.lo").html();
        low = prettyData(low)
        var feelsLike = $("span.temp").html();
        feelsLike = prettyData(feelsLike)
        var temperature = $("span.wu-value.wu-value-to").html();
          console.log("It’s " + temperature + " degrees Fahrenheit.");
          console.log("feels like " + feelsLike)
          console.log("high " + high)
          console.log("low " + low)
      } else {
        console.log("We’ve encountered an error: " + error);
      }
    });
  }


function next() {
	textdiv.innerHTML = "hi.";

}
