import { PAL } from "src/app/Projecte/Utils/pals";
import { Utils } from "src/app/Projecte/Utils/Utils";
import { IBaralla } from "../../Interfaces/Baralla/IBaralla";
import { Carta } from "../Carta/Carta";

export class BarallaBase implements IBaralla<ICarta> {
    baralla: Array<ICarta> = new Array<ICarta>();

    constructor() {
        for(let j=0;j<4;j++) this.baralla.push(new Carta(1,PAL[j].pal,PAL[j].imatge));
    }

    barrejar(): void {
        for (let index = 0; index < this.baralla.length; index++) this.canviar(index);
    }

    private canviar(index:number) {
        const index2=Utils.getRandom(this.baralla.length-1);
        this.intercanviar(index,index2);
    }

    private intercanviar(index:number,index2:number) {
        const aux=this.baralla[index];
        this.baralla[index] = this.baralla[index2];
        this.baralla[index2] = aux;
    }
    
}
