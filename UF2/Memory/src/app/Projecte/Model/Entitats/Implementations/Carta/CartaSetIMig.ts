import { Carta } from "./Carta";
import { ICartaSetIMig } from "../../Interfaces/Carta/ICartaSetIMig";

export class CartaSetIMig extends Carta {
    indexBaralla: number; 

    constructor(num: number, pal: string, img: string, indexBaralla: number) { 
        super(num,pal,img);
        this.indexBaralla = indexBaralla;
    }

    private getIndex() { return this.indexBaralla; }

}
