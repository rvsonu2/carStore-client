export class User {
  public id:any;
  public firstName: string;
  public lastName: string;
  public prefferedName: string;
  public gender:string;
  public phone:string;
  public dateOfBirth:string;
  public email:string;
  public role:string;
  public password:string;
  public address:string;
  public photos:any;
  public enabled:boolean;

  constructor() {
    this.firstName="";
    this.dateOfBirth="";
    this.email="";
    this.firstName="";
    this.lastName="";
    this.gender="";
    this.password="";
    this.phone="";
    this.role="";
    this.prefferedName="";
    this.address="";
    this.enabled=true;
  }
}
