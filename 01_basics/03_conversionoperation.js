// let score = 33
// let score = "33"
// let score = "33abc"
// let score = null 
// let score = undefined
// let score = true

// console.log(typeof score);
// console.log(typeof (score)); 2nd way for check datatype of given number

// let valueInNumber =  Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
//  33abc => NAN
//  null => 0
// undefined => NAN
// true => 1 ; false => 0 ;

// let isLoggedIn = 1
// let isLoggedIn = 0
// let isLoggedIn = ""
// let isLoggedIn = "Hiren"

// let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn)
// console.log(typeof booleanIsLoggedIn);


// 1 => true ; 0 => false
// "" => false 
// "Hiren" => True

let someNumber = 33

let stringNumber = String(someNumber)

// console.log(stringNumber)
// console.log(typeof stringNumber)


//******************  Operations  ************************************************************** */


let value = 6
let negvalue = -value

// console.log(negvalue);


// basic Maths Operation
// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2**3); // 2's power 3
// console.log(2%3);  // reminder


let str1 = "Hiren "
let str2 = "Prajapati"

let str3 = str1+ str2;
// console.log(str3);

// console.log("1" + 2); //12 no conversion for string to number
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2 ); //122
// console.log(1+ 2 + "2" ); //32  // don't write code like this


// console.log( (3 + 4) * 5 % 3) 
// always use bracket and don't write code those who are not easy to understand

// console.log(true+)  // not applicable
// console.log(+true)  //use for conversion don't use this kind of code 
// console.log(+"")  

// let num1 , num2 ,num3 
// num1 = num2 = num3 = 2+2 
// // don't declare  variable like this 

let gameCounter = 100
gameCounter++;
console.log(gameCounter);


//  prefix 

let x = 4;
let y = ++x;

console.log([x],[y]); // op: x = 5 , y = 5


// postfix
let a = 4;
let b = a++;

console.log([a],[b]); // op: a = 5 , b = 4


