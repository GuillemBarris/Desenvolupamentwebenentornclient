import { IJugador } from "../../Interfaces/Jugador/Jugador";
import { Baralla } from "../Baralla/Baralla";
import { CartaSetIMig } from "../Carta/CartaSetIMig";

export class Jugador implements IJugador {
    cartes: CartaSetIMig[]=new Array<CartaSetIMig>();
    baralles: Baralla[]=new Array<Baralla>();

    constructor() {

    }

    agafarCarta(carta: CartaSetIMig): void {
        this.cartes.push(carta);
        this.baralles[carta.indexBaralla]; 
    }
    
    public generarBaralles(): void {
        for(let i = 0; i < 4; i++) {
            this.baralles.push(new Baralla(i));        
        }
        console.log(this.baralles);
    }
    

    
}