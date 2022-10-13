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
      {titulo:"Tiburón",director:"Steven Spielberg",imagen:"https://i.etsystatic.com/19389619/r/il/b4518b/2598217185/il_fullxfull.2598217185_8bx4.jpg"},
      {titulo:"Alien",director:"Ridley Scott",imagen:"https://i.etsystatic.com/14461980/r/il/28c6d5/1417485862/il_fullxfull.1417485862_le2x.jpg"},
      {titulo:"El exorcista",director:"William Friedkin",imagen:"https://m.media-amazon.com/images/I/71lXNBrOLbL._AC_SY606_.jpg"},
      {titulo:"Sharknado",director:"Anthony C. Ferrante",imagen:"https://static.posters.cz/image/750/posters/sharknado-one-sheet-i15737.jpg"},
      {titulo:"The fog",director:"Carpenter",imagen:"https://i.pinimg.com/originals/3b/3a/05/3b3a05d0e0534cd41c4e376cf548176b.jpg"},
      {titulo:"2001",director:"Stanley Kubrick",imagen:"https://m.media-amazon.com/images/I/618TzJaOw4L._AC_SL1024_.jpg"},
      {titulo:"Star Wars - IV",director:"George Lucas",imagen:"https://i.etsystatic.com/16821137/r/il/dd3c3a/1896520663/il_570xN.1896520663_lmv1.jpg"},
      {titulo:"6-headed shark attack",director:"Nico De Leon",imagen:"https://m.media-amazon.com/images/M/MV5BNzJlNjU4YTUtY2U5OS00NDUxLWFmMGEtMDhkYjQwYzdhZDk4XkEyXkFqcGdeQXVyNzEwNTIyMjU@._V1_FMjpg_UX1000_.jpg"},
      {titulo:"Nosferatu",director:"Friedrich Wilhelm Murnau",imagen:"https://s1.dmcdn.net/v/HW59Q1NwMZzQrm83q/x1080"},
      {titulo:"El mago de Oz",director:"Victor Fleming",imagen:"https://c8.alamy.com/compes/hcpge9/el-mago-de-oz-aka-le-alquimista-d-oz-poster-frances-arte-1939-hcpge9.jpg"},
      {titulo:"La momia",director:"Karl Freund",imagen:"https://upload.wikimedia.org/wikipedia/commons/6/6b/The_Mummy_1932_film_poster.jpg"},
      {titulo:"Medianoche en París",director:"Woody Allen",imagen:"https://cdn.shopify.com/s/files/1/1416/8662/products/midnight_in_paris_2011_original_film_art_6f337e28-841b-40c8-935b-51f50f1e4270_1200x.jpg?v=1662659216"},
      {titulo:"Memorias de África",director:"Sidney Pollack",imagen:"https://m.media-amazon.com/images/I/81xxcQ+3QQL._SL1500_.jpg"},
      {titulo:"El Padrino",director:"Francis Frod Coppola",imagen:"https://www.ecartelera.com/carteles/2500/2521/002.jpg"}
    ];
  }

  public getPeliculas():Pelicula[]{
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
        pelicula.titulo = nuevoTitulo;
      }
    });
  }


}






