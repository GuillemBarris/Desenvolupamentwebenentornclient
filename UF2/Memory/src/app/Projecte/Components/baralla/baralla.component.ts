import { Component, Input, OnInit } from '@angular/core';
import { Baralla } from '../../Model/Entitats/Implementations/Baralla/Baralla';
import { JugadorService } from '../../Model/Services/jugadors/jugador.service';


@Component({
  selector: 'app-baralla',
  templateUrl: './baralla.component.html',
  styleUrls: ['./baralla.component.css']
})

export class BarallaComponent implements OnInit {


  constructor(private jugadorService:JugadorService) { }
  @Input() baralla!: Baralla;

  ngOnInit(): void {
    this.jugadorService.getBaralla(this.baralla.index).barrejar();
    //console.log(this.baralla.baralla[0].num);
  }
  public getBaralla():Baralla {
    return this.jugadorService.getBaralla(this.baralla.index);
  }

}
