import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { ProveedorPeliculasService } from 'src/app/services/proveedor-peliculas.service';

@Component({
  selector: 'app-formulario-nueva-pelicula',
  templateUrl: './formulario-nueva-pelicula.component.html',
  styleUrls: ['./formulario-nueva-pelicula.component.css']
})
export class FormularioNuevaPeliculaComponent implements OnInit {

  nuevaPelicula:Pelicula = new Pelicula();
  @Output() eventoAgregar:EventEmitter<any>;
  constructor(private servicioVideoclub:ProveedorPeliculasService) { 
    this.eventoAgregar=new EventEmitter();
  }

  ngOnInit(): void {
  }

  agregar():void{
    this.servicioVideoclub.agregarPelicula({...this.nuevaPelicula});
    this.eventoAgregar.emit();
  }

}
