import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProveedorPeliculasService } from 'src/app/services/proveedor-peliculas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Output() eventoBusqueda:EventEmitter<string>;
  cadena:string="";
  constructor(private servicioVideoclub:ProveedorPeliculasService) { 
    this.eventoBusqueda = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  buscar():void {
    console.log("Buscando...");
    this.servicioVideoclub.getPeliculas(this.cadena);
    this.eventoBusqueda.emit("");
  }

}
