export interface User {
  //common
  name: string;
  email: string;
  phone: number;
  userid: number;
  roleid:number;
  //user specific
  address : string;
  typeofemergency:any;//enum
  batterylife:number;
  age:number;
  allergies : string;
  //responder
  skills:string;
  teamid:number;
  location:string;
  availablity:boolean;
  //EOC Agents
  //admin
  
}