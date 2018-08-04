var now = require("performance-now")



function inverseCaptcha(str){
  var sum = 0;
  for(var i = 0; i < str.length; i++){
    if(i != str.length-1){
      console.log(str.charAt(i))
      if(str.charAt(i) == str.charAt(i+1)){
        sum+= parseInt(str.charAt(i))
      }
    }
    else{
      if(str.charAt(i) == str.charAt(0)){
        sum += parseInt(str.charAt(i))
      }
    }
  }
  console.log(sum)
}
var start = now()
inverseCaptcha("911321294345363563525424234234464564552434545456463")
var end = now()
console.log((end - start) + " milliseconds")
