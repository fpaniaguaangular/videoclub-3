import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { ProveedorPeliculasService } from 'src/app/services/proveedor-peliculas.service';

@Component({
  selector: 'app-formulario-nueva-pelicula',
  templateUrl: './formulario-nueva-pelicula.component.html',
  styleUrls: ['./formulario-nueva-pelicula.component.css']
})
export class FormularioNuevaPeliculaComponent implements OnInit {

  nuevaPelicula:Pelicula = new Pelicula();
  constructor(private servicioVideoclub:ProveedorPeliculasService) { 
  }

  ngOnInit(): void {
  }

  agregar():void{
    console.log("Agregando película...");
    this.servicioVideoclub.agregarPelicula({...this.nuevaPelicula});
  }

}
