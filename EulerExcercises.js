function multiplesOfThreeOrFive(){
  var sum = 0;
  for(var i = 0; i < 100; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i;
    }
  }
  console.log(sum)
}
multiplesOfThreeOrFive()


function fibSum(){
  var arr = [1,2]
  var num = 0;
  var sum = 2;
  var index = 0;
  while(num < 4000000){
    num = arr[index] + arr[index+1]
    console.log(num)
    arr.push(num)
    index++
    if(num %2 == 0){
      sum += num
    }
  }
  return sum
}
console.log(fibSum())



function largestPrimeFactor(num){
  var final = 2;
  var number = 600851475143;
  while(number > 1){
    if(number % final === 0){
        number /= final;
    } else {
        final++;
    }
}
console.log(final);
}
largestPrimeFactor(600851475143)


function largestPalindrome(){
  var product = 0;
  var reverse = ""
  var arr = []
  var max = 0
  for(var i = 999; i > 99; i--){
    for(var x = 999; x > 99; x--){
      product = x * i;
      reverse = product.toString().split("").reverse().join("")
      if(product == reverse){
        arr.push(product)
      }
    }
  }
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  console.log(max)
}
largestPalindrome()



function smallestMultiple(){
  var arr = []
  var num = 1;
  while(arr.length < 20){
    for(var i = 1; i < 21; i++){
      if(num % i != 0){
        break;
      }
      else{
        arr.push(i)
      }
    }
    if(arr.length == 20){
      console.log(num)
      break;
    }
    else{
      arr = []
      num++;
    }
  }
}
smallestMultiple()
