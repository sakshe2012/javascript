let btn1 = document.querySelector('#btn1');
/*btn1.onlick = () => {
       console.log("btn1 was clcikced");
    let a=25;
    a++;
    console.log(a); // 26
};
*/

btn1.addEventListener("click" ,(evt) =>{
    console.log("button was clciked - handler1");
});

btn1.addEventListener("click" ,() =>{
    console.log("button was clciked - handler2");
});
const handler3 =() =>
{
    console.log("button was clciked - handler3");

}
btn1.addEventListener("click" ,handler3);

btn1.addEventListener("click" ,() =>{
    console.log("button was clciked - handler4");
});
btn1.removeEventListener("click",handler3);
