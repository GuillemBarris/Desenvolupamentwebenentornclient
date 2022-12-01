import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarallaComponent } from './Projecte/Components/baralla/baralla.component';
import { CartaComponent } from './Projecte/Components/carta/carta.component';
import { JugadorComponent } from './Projecte/Components/jugador/jugador.component';


@NgModule({
  declarations: [
    AppComponent,
    BarallaComponent,
    CartaComponent,
    JugadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
