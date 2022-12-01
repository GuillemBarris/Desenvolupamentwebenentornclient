import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { CartaSetIMig } from '../../Model/Entitats/Implementations/Carta/CartaSetIMig';
import { JugadorService } from '../../Model/Services/jugadors/jugador.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  constructor(private jugadorService:JugadorService, @Inject(APP_BASE_HREF) private baseHref: string) { }
  @Input() carta!: CartaSetIMig;
  ruta!:string;
  ngOnInit(): void {
    this.ruta = this.baseHref;
  }

  agafar(carta:CartaSetIMig) {
      carta.girar();
      this.jugadorService.getJugador().agafarCarta(carta);
  }

}
