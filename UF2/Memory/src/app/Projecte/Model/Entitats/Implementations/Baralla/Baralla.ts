import { CartaSetIMig } from "../Carta/CartaSetIMig";
import { BarallaBase } from "./BarallaBase";

export class Baralla extends BarallaBase {
    override baralla!:Array<CartaSetIMig>;
    index: number;

    constructor(index:number) {
        super();
        this.inicialitzar();
        this.index = index;
    }

    public inicialitzar() {
       
    }

}