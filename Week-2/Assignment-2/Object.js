function calculate(args) {
     let result;
     if (args.op === "+") {
         result = args.n1 + args.n2;
     } else if(args.op ==="-") { 
         result = args.n1 - args.n2;
     } else {
             result = "Not supported";
     }
     return result;
}

// Try to call calculate function correctly
/*
 For example, if we have an add function like this:
 function add(args){
 return args.n1+args.n2;
 }
 We can call it by passing an object created by JSON literal:
 add({n1:3, n2:4}); // your first way
 You should find another way to create a proper object.
 // your second way
*/

//my first way
console.log(calculate({n1:3, n2:4, op:"+"}));

//my second way
var numbers = new Object;
numbers.n1=3;
numbers.n2=4;
numbers.op="+";

console.log(calculate(numbers));
