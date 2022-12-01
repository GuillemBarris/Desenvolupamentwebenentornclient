import { Baralla } from "../../Implementations/Baralla/Baralla";
import { CartaSetIMig } from "../../Implementations/Carta/CartaSetIMig";

export interface IJugador {
    cartes:Array<CartaSetIMig>;
    baralles:Array<Baralla>;

    agafarCarta(carta:CartaSetIMig):void;
    generarBaralles():void;
}