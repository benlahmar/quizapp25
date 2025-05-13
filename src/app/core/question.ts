import { Option } from "./option";

export class Question
{
    id:number;
    name:string;

    options:Option[];
    isresponse:boolean;
    iscorrect:boolean;
    constructor(data:any)
    {
        this.id=data.id;
        this.name=data.name;
        this.options=[];
        data.options.forEach((o:Option) => {
            this.options.push(new Option(o));
        });
        this.isresponse=false;
        this.iscorrect=false;
    }
}