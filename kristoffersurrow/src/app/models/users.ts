export class Users{
    id:number;
    name:string;
    password:string;
    counter:number;

    constructor(username:string, password:string){
        this.name = username;
        this.password = password;
    }
}