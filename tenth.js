const student={
    name:"sak",
    cgpa:45.6,
    printmarks:function(){
        console.log(this.cgpa);
    },
};

class toyotacar {
    constructor(brand)
    {
        console.log("creating new objet");
        this.brand =  brand ;
    }
 start()
 {
    console.log("start");
 }
 stop()
 {
    console.log("stop");
 }
}
let fortuner = new toyotacar("fortuner");
let swift = new toyotacar();


class parent
{
    hello()
    {
        console.log("hello");
    }
}

class child extends parent{   
}
let obj = new child();

class person
{
    eat()
    {
        console.log("eating");
    }
    sleep()
    {
        console.log("sleeping");
    }
}
class Engg extends person
{
    work()
    {
        console.log("solve problems");
    }
}
let s1=new Engg();