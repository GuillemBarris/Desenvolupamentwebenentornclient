import "../../Interfaces/Carta/ICarta";

export class Carta implements ICarta{
    num: number;
    pal: string;
    img: string;
    visible: boolean;


    constructor(num:number,pal:string,img:string) {
        this.num = num;
        this.pal = pal;
        this.img = img;
        this.visible = false;
    }
    
    girar() {
        this.visible = !this.visible;
    }
 

    
}