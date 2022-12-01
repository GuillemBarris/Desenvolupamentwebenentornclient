import { Component, HostListener } from '@angular/core';
import { CartaSetIMig } from './Projecte/Model/Entitats/Implementations/Carta/CartaSetIMig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() {}
  @HostListener("window:beforeunload",["$event"]) unloadHandler(event: Event) {
  }

 
}
