console.log("helllo world");
console.log("welcome to js" );
name="sakshi kumbhar";
console.log(name);
c=null;
console.log(c);
d=undefined;
console.log(d);
let Name= 'sakshi';//  let can not be redecalred 
console.log(Name);
Name='sakshi kumbahr';// let can be updated
console.log(Name);
var age=90// var can be redecalred 
var age=80// var can be redeclared 
console.log(age);
const pi=3.14; // can not redecalred and not be updatedtypeof(pi);
console.log(typeof(pi));
console.log(typeof(Name));
 const student=   // object - collect of diffrenet type of datatype
 {
    name: "sakshi",
    age:3,
    cgpa:89,
 };
 console.log(student);
 // single line commnad
 /*
 multi line command
 */
// arthimetic operators
let a=5;
let b=2;
console.log("a+b", a+b);
console.log("a-b", a-b);
console.log("a*b", a*b);
console.log("a/b", a/b); // quotient
console.log("a%b", a%b);// remainder
console.log("a**b",a**b); // a to power b
// unary operator
a=a-1;
console.log(a);
a=a-1;
console.log(a);
console.log("a++",a++);
console.log("++a",++a);
// assigenment operator
a += 4; // a=a+4
console.log("a",a);
a -= 4;
console.log("a",a);
a *= 4;
console.log("a",a);
a /= 4;
console.log("a",a);
//comparison operator
let x=5;
let y=10;
console.log("x==y",x==y);
console.log("x1=y",x!=y);
console.log("x>y",x>y);
console.log("x<y",x<y);
console.log("x>=y",x>=y);
console.log("x<=y",x<=y);
console.log("x===y",x===y);
console.log("x!==y",x!==y);
// logical operator
let p=5;
let q=9;
console.log("p>3 && q>5",p>3 && q>5);
console.log("p>3 || q>5",p>3 || q>5);
console.log("!(p>3)",!(p>3)); 
 // condtional statement
let Age=8
if(Age>=18)
{
    console.log("can vote");

}
else
{
    console.log("can not vote");
}
// if else if else statement
let num=10;
if(num>0)
{
    console.log("number is positive");
}
else if(num<0)
{
    console.log("number is negative");
}
else{
    console.log("number is zero");
}
// ternary operator
// condition ? expression 1(true output): expression 2(false output);
age>18 ? console.log("can vote") : console.log("can not vote");
// switch statement
let day=3;
switch(day)
{
    case 1:
        console.log("monday");
        break;          
    case 2:
        console.log("tuesday");
        break;  
    case 3:
        console.log("wednesday");
        break;  
    default:
        console.log("invalid day");
}

alert("hello");// pop up message
let username =prompt("enter name");// input from user
console.log("hello",username);