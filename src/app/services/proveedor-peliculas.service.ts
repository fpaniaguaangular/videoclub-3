import { Injectable } from '@angular/core';
import { toUpperCase } from '../funciones';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class ProveedorPeliculasService {

  private peliculas:Pelicula[]=[];
  
  constructor() { 
    this.peliculas = [
      {titulo:"Tiburón",director:"Spielberg",imagen:"https://i.etsystatic.com/19389619/r/il/b4518b/2598217185/il_fullxfull.2598217185_8bx4.jpg"},
      {titulo:"Alien",director:"Ridley",imagen:"https://i.ebayimg.com/images/g/WYAAAOSwpXpZyodo/s-l500.jpg"},
      {titulo:"El exorcista",director:"William Friedkin",imagen:"https://m.media-amazon.com/images/I/71lXNBrOLbL._AC_SY606_.jpg"},
      {titulo:"Tiburón",director:"Spielberg",imagen:"https://i.etsystatic.com/19389619/r/il/b4518b/2598217185/il_fullxfull.2598217185_8bx4.jpg"},
      {titulo:"Alien",director:"Ridley",imagen:"https://i.ebayimg.com/images/g/WYAAAOSwpXpZyodo/s-l500.jpg"},
      {titulo:"El exorcista",director:"William Friedkin",imagen:"https://m.media-amazon.com/images/I/71lXNBrOLbL._AC_SY606_.jpg"},
      {titulo:"6-headed shark attack",director:"Nico De Leon",imagen:"https://m.media-amazon.com/images/M/MV5BNzJlNjU4YTUtY2U5OS00NDUxLWFmMGEtMDhkYjQwYzdhZDk4XkEyXkFqcGdeQXVyNzEwNTIyMjU@._V1_FMjpg_UX1000_.jpg"}
    ];
  }
  
  public getPeliculas(cadena:string):Pelicula[]{
    this.peliculas = this.peliculas.filter(
      p=>(p.titulo.search(cadena)>=0));
    console.log(this.peliculas);
    return this.peliculas;
  }

  public agregarPelicula(nuevaPelicula:Pelicula):void{
    this.peliculas.push(nuevaPelicula);
  }

  public eliminarPelicula(peliculaAEliminar:Pelicula):void{
    let index = this.peliculas.indexOf(peliculaAEliminar, 0);
    if (index > -1) {
      this.peliculas.splice(index, 1);
    }
  }
  
  public modificarTituloPeliculo(peliculaAEditar:Pelicula, nuevoTitulo:string){
    this.peliculas.forEach((pelicula: any) => {
      if (pelicula.titulo == peliculaAEditar.titulo) {
        pelicula.titulo = toUpperCase(nuevoTitulo);
      }
    });
  }


}






