let divs=document.querySelectorAll(".box");

let index = 0;
for(div of divs )
{
    div.innerText = `new unqiue value ${index}`;
    index++;
}
/*
without loop we can also change text of box
divs[0].innerText = " new unqiue value 0";
divs[1].innerText = " new unqiue value 1";
divs[2].innerText = " new unqiue value 2";
*/