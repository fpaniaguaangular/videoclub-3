import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { ProveedorPeliculasService } from 'src/app/services/proveedor-peliculas.service';

@Component({
  selector: 'app-ficha-pelicula',
  templateUrl: './ficha-pelicula.component.html',
  styleUrls: ['./ficha-pelicula.component.css']
})
export class FichaPeliculaComponent implements OnInit {

  @Input() public pelicula:Pelicula|any;
  @Input() public gestionado:boolean=false;
  @Output() public eventoDetalle:EventEmitter<Pelicula>;//Se desea ver el detalle 
  @Output() public eventoEliminar:EventEmitter<any>;//Se ha eliminado una película del servicio
  constructor(private servicioVideoclub:ProveedorPeliculasService) { 
    this.eventoDetalle = new EventEmitter<Pelicula>();
    this.eventoEliminar = new EventEmitter();
  }

  ngOnInit(): void {
  }

  eliminarPelicula(){
    this.servicioVideoclub.eliminarPelicula(this.pelicula);
    this.eventoEliminar.emit();
  }

  mostrarDetalle(){
    this.eventoDetalle.emit({...this.pelicula});
  }

}
