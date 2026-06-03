//functions
function myfucntion()
    {
        console.log("helo world");
    }

myfucntion();


function fucntion1(msg) // msg-----parameter
{
    console.log(msg);
}
fucntion1("welcome to js"); // argument


function sum(a,b)
{
    console.log(a+b);
}
sum(10,20);


function sum1(a,b)
{
    return a+b;// local variable -- block scope 
    console.log("hi"); // this will not execute because return statement is above it
}
var result = sum1(1,20);
console.log(result);


// Arrow fucntion
const sub=(a,b) =>
{
    return a-b;
}
let res=sub(90,90);
console.log(res);


// if the function has only one statement then we can write it in one line without return keyword
const mul=(a,b) => a*b;
let res1=mul(10,20);
console.log(res1);  

// count number of vowles in string
function countvowel(str)
{
    let count=0;
    for(const chsr of str)
    {
        if(chsr=='a' || chsr=='e' || chsr=='i' || chsr=='o' || chsr=='u')
        {
            count++;
        }
    }
    return count;
}

// suing arrow function
  const countvow=  (str) =>
  {
    let count=0;
    for(const char of str)
    {
        if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u')
        {
            count++;
        }
    }
    return count;
}

//   for each loop in  array
let a=[1,2,3,4,5];
a.forEach(function(element){
    console.log(element);
});


// using arrow function
a.forEach((element) => console.log(element));   


// map funcito'
let numbers=[10,20,30,40,50];
let newarr=numbers.map((val) => {
    return val;
});
console.log(newarr);

// sqaure of array elements
let newarr1=numbers.map((val) => {
    return val*val; // square of values in array
});
console.log(newarr1);

// filter mehotds
let numbers1=[10,20,30,40,50];
let evenarr=numbers1.filter((val) => {
    return val % 2 === 0; // filter even numbers from array
});
console.log(evenarr);

// reduce methos
let c=[1,2,3,4];
const output = c.reduce((res,curr) => // res--curr
{
    return res+curr;// sum of all elements in array
});
console.log("sum of array element is:",output);// 10


// find max number using reduce methodlet 
let d=[5,6,2,1,3]
const output1= d.reduce((prev,curr) =>
{
    return prev > curr ?prev : curr; // find max number in array
});
console.log("greater numb in array is:" ,output1); // 6