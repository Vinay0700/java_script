// console.log(1+"2");
// console.log(1+"2"+1);
// console.log("1"+2+2)
// console.log(1+2+"2")

// let ar= new Array(1,2,34,5,6,7,8,8,9)

// console.log(ar);
// let ar2= ar.slice(1,4)
// console.log(ar2);

// let ar1= ar.splice(1,4);
// console.log(ar);
// console.log(ar1);



// IIFE - immediately invoked function expression

// function duib(){
//     console.log(`yummy lob`)
// }
// duib()this is a normal function execution

// (function duib(){
//         console.log(`yummy lob`)
//     })()---> this is how you do iife for single function
//  for double functions we do like this

(function sum(num1,num2){
      console.log(num1+num2)
})(3,4);
(function sbm(num1,num2){
    console.log(num1-num2)
})(3,4)

/// parnthesis should be there for execution other wise fucked up see line number 34 for paranthesis