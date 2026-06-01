// loops
for (let i =0;i<5;i++)
{
    console.log("hieee");
}

// sum of 1 to n number
let sum=0;
let n=100;
for(let i=1 ;i<n;i++)
{
    sum=sum+i;
}
console.log("sum is :" ,sum);

// while looop
let i=1;
while(i<=10)
{
    console.log(i);
    i++;
}

// do while loop
let a=20;
do{
    console.log("sakshi");// even if conditionn is wrong still do while loop will exectue atleast once
} while(a<=10)

//for of loop
// no need to initialize j ,no updataion

let str="Sakshi Kumbhar"
for(let j of str)
{
    console.log(j)
}

let length=0;
for(let b of str)
{
    console.log(b);
    length++;
}
console.log("length of string:" ,length);

// for in loop used only fro object to return keys
let student= /// this is object
{
    name:"sakshi ",
    cgpa:90,
    marks:180,
};
for (let key in student)
{
    console.log("key:",key,"value:",student[key]); // print key value pair
}

// strings
let Str="sakshi sanjay kumbhar"
console.log(Str);
console.log(Str.length);// lenght funtion
console.log(Str[8]);// slicing
console.log(Str.toLowerCase());
console.log(Str.toUpperCase());
console.log(Str.trim()); /// remove white spaces from staring and ending
console.log(Str.slice(2,9)) // slicling 
console.log(str+Str) // or str.concat(Str)
console.log(Str.replace("s","y"));// replace 1st character
console.log(Str.replaceAll("s","y")); // replace all cahrCTER
console.log(Str.charAt(9)); // charcter at particlular index

// templet literal-- special tye pf string declared in `` 
let h=`you are so selfish`;
console.log(h)
console.log(typeof(h));

//