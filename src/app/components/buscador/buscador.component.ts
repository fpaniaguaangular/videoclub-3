import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProveedorPeliculasService } from 'src/app/services/proveedor-peliculas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  cadena:string="";
  @Output() propagarBusqueda:EventEmitter<string>;
  constructor() { 
    this.propagarBusqueda = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  buscar():void {
    this.propagarBusqueda.emit(this.cadena);
  }

}
