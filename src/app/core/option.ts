export class Option
{
    id:number;
    name:string;
    isAnswer:boolean;

    isSelected:boolean;

    constructor(data:any)
    {
        this.id=data.id;
        this.name=data.name;
        this.isAnswer=data.isAnswer;
        this.isSelected= false;
    }
}