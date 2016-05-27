export class JVModel {
    public id : number;
    public branchId : number;
    public branch : string;
    public jvNumber : string;
    public jvDate : Date;
    public particulars : string;
    public manualJVNumber : string;
    public preparedById : number;
    public preparedBy : string;
    public checkedById : number
    public checkedBy : string;
    public approvedById : number;
    public approvedBy : string;
    public isLocked : boolean;
    public createdById : number;
    public createdDateTime : Date;
    public updatedById : number;
    public updatedDateTime : Date;
    
    constructor() {
        this.jvDate = new Date();
        this.createdDateTime  = new Date();
        this.updatedDateTime = new Date();
    }
}