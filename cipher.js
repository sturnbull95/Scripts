var readline = require('readline');

var myInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function swap(){
  var str = ['A','B','C','D','E','F','G','H','I',
                'J','K','L','M','N','O','P','Q','R',
                'S','T','U','V','W','X','Y','Z'];
  var firstHalf = str.slice(0,13)
  var secondHalf = str.slice(13,26)
  var firstReversed = firstHalf.reverse()
  var secReversed = secondHalf.reverse()
  for(var i = 0; i < firstReversed.length; i++){
    secReversed.push(firstReversed[i])
  }
  var final = secReversed
  console.log(final)
  return final
}
function encrypt(str){
  var normal = ['A','B','C','D','E','F','G','H','I',
                'J','K','L','M','N','O','P','Q','R',
                'S','T','U','V','W','X','Y','Z'];
  var swappedArr = swap()
  var arr = str.split(' ')
  var finalArr = []
  for(var i = 0; i < arr.length; i++){
    var temp = arr[i].split('')
    finalArr.push(temp)
  }
  var finalString = ""
  for(var i = 0; i < finalArr.length; i++){
      finalString+=(" ")
    for(var x = 0; x < finalArr[i].length; x++){
      var index = normal.indexOf(finalArr[i][x])
      finalString+=(swappedArr[index])
    }
  }
  return finalString

}
myInterface.question('Give me something to encrypt ',(answer) =>{
  console.log("encrypted phrase is: " + encrypt(answer))
  myInterface.close
})
