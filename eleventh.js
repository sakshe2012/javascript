let data ="information";

class user
{
    constructor (name , email)
    {
        this.name = name ;
        this.email = email;
    }
    viewData()
    {
        console.log("data:",data);
    }
}


class Admin extends user{
    constructor (name , email)
    {
        super(name ,email);
    }
    editData()
    {
        data="some new vale";
    }
}
let stud1= new user("sakshi" ,"sak@gmail.com");
let stud2 = new user("sagar" ,"sagar@gmai.com");
let admin1 = new Admin("admin","admin@gmail.com");
