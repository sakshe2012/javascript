/*console.log("one")
console.log("two")
console.log("three")
function hello()
{
    console.log("hi sakshi");
}
setTimeout(hello,4000);  // fucntion ,time 
console.log("four")
console.log("five")


// callback 
function sum(a,b)
{
    console.log(a+b);
}
function calculator(a,b,sumCallback)
{
    sumCallback(a,b);
}
calculator(1,2,sum); // passed a fucntion as an argument   
// callback are apssed without () 

function getData(id)
{
    setTimeout(() => {
        console.log("data",id);
    }, 2000);
}
getData(100);


let promise = new Promise((resolve,reject) =>
{
    console.log("i am promise");
   resolve("resolved callback");
    
});

let promise1 = new Promise((resolve,reject) =>
{
    console.log("i am promise");
  
    reject("reject state");
});
*/


function asyncFunc1()
{
    return new Promise ((resolve , reject) =>
    {
        setTimeout(() =>
        {
            console.log("some data");
            resolve("success");

        } ,4000);
    });
}

function asyncFunc2()
{
    return new Promise ((resolve , reject) =>
    {
        setTimeout(() =>
        {
            console.log("some data");
            resolve("success");

        } ,4000);
    });
}

// below code exectue 1 st data after 4sec then 2 data after 4 sec -- 
// one after another ===  promise chaining

console.log("fetching data1");
let p1 =asyncFunc1();
p1.then((res) =>
{
    console.log(res);// data 1 is fetched
    console.log("fetching data2");
    let p2 =asyncFunc2();  // it will start to fetch data2
    p2.then((res) =>
    {
      console.log(res);
    })
})

// asych fucntion will return promsie always 
// we mannually dont need to do this 
async function helllo()
{
    console.log("hello");
}

// asych with await 
function api()
{
    return new Promise((resolve,reject) =>
    {
        console.log("weather data");
        resolve(200);
    });
}
async function getweather()
{
    await api();
}