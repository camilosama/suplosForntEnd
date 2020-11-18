import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//servicios
import { PixabayService } from './services/pixabay.service';


//importar Rutas
import { ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './components/shared/cards/cards.component';
import { CargandoComponent } from './components/shared/cargando/cargando.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    NavbarComponent,
    CardsComponent,
    CargandoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, {useHash: true} )
  ],
  providers: [PixabayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
