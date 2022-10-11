import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { ProveedorPeliculasService } from 'src/app/services/proveedor-peliculas.service';

@Component({
  selector: 'app-gestor-peliculas',
  templateUrl: './gestor-peliculas.component.html',
  styleUrls: ['./gestor-peliculas.component.css']
})
export class GestorPeliculasComponent implements OnInit {

  public peliculas:Pelicula[]=[];
  public peliculasFiltradas:Pelicula[]=[];
  public detalleVisible:boolean=false;
  public peliculaDetallada:Pelicula|any;

  constructor(private servicioVideoclub:ProveedorPeliculasService) { 
    this.cargarDatos();
  }

  cargarDatos():void{
    this.peliculas = this.servicioVideoclub.getPeliculas("");
    console.log(this.peliculas);
  }

  ngOnInit(): void {
  }

  mostrarDetalle(pelicula:Pelicula){
    console.warn("Mostrando detalle..." + pelicula.titulo);
    this.peliculaDetallada=pelicula;
    this.detalleVisible=true;
  }

  cerrar(){
    this.detalleVisible=false;
  }

}
