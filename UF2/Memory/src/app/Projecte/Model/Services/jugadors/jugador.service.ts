import { Injectable } from '@angular/core';
import { Baralla } from '../../Entitats/Implementations/Baralla/Baralla';
import { Jugador } from '../../Entitats/Implementations/Jugador/Jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  private jugador:Jugador = new Jugador();
  constructor() { }
  getJugador():Jugador { return this.jugador;}
  getBaralla(index:number): Baralla { return this.jugador.baralles[index];}
}
