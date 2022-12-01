import { Baralla } from "../../Implementations/Baralla/Baralla";
import { CartaSetIMig } from "../../Implementations/Carta/CartaSetIMig";
import { IJugador } from "./Jugador";


export interface IOrdinador extends IJugador {
    maxPunts:number; // Número a partir del qual deixa d'agafar cartes
    jugar(baralla:Baralla):number; // Número de punts obtinguts amb la partida
}

