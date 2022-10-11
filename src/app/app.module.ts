import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GestorPeliculasComponent } from './components/gestor-peliculas/gestor-peliculas.component';
import { FormularioNuevaPeliculaComponent } from './components/formulario-nueva-pelicula/formulario-nueva-pelicula.component';
import { FichaPeliculaComponent } from './components/ficha-pelicula/ficha-pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    GestorPeliculasComponent,
    FormularioNuevaPeliculaComponent,
    FichaPeliculaComponent,
    DetallePeliculaComponent,
    BuscadorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }