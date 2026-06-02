// array
let marks=[45,67,88,90];
console.log(marks);
console.log(marks.length);
console.log(typeof marks);// object data tye
console.log(marks[2]);
marks[2]=100;// change value of index 2
console.log(marks);
let arr=[1,2,3,4,5];
for (let i =0;i<arr.length ;i++)
{
    console.log("elemetn of arrray :" ,arr[i]);
}
for (let item of arr)
{
    console.log(item);
}
let cities=["delhi","mumbai","kolkata","chennai"];
for (let city of cities)
{
    console.log(city);
}
//  sum of array elemnt
let Marks=[67,89,0,98,88]
let sum=0;
    for(let mark of Marks)
    {
        sum=sum+mark;

    }
console.log(sum);
let avg=sum/Marks.length;
console.log(avg);
// using for of loop
let items=[250,300,900,50];
let i = 0;
for(let val of items)
{
    console.log(`value of index ${i} =${val}`);
    let offer =val/10;
    items[i]=items[i]-offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}
// using for loop
let item=[250,300,900,50];
for(let i=0;i<item.length;i++)
{      
    console.log(`value of index ${i} =${item[i]}`);
    let offer =item[i]/10;
    item[i]=item[i]-offer;
    console.log(`value after offer = ${item[i]}`);
}   

// array methods
let veggies=["tomato","potato","onion","carrot"];
console.log(veggies);
veggies.push("cabbage","beetroot");// add elemnt at end
console.log(veggies);
veggies.pop(); // remove last elemnt
console.log(veggies);
console.log(veggies.toString());// array convetred into string 
veggies.unshift("garlic");// add elemnt at start
console.log(veggies);
veggies.shift();// remove first elemnt
console.log(veggies);
console.log(veggies.slice(1,));// slice method return new array from given index to end
console.log(veggies.splice(1,2,"cucumber","capsicum"));// splice method remove and add elemnt at given index
console.log(veggies);
// add elemnt at specific index using splice method
veggies.splice(2,0,"adrak");// add elemnt at index 2
console.log(veggies);   
