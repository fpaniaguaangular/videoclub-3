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
  @Output() public eventoDetalle:EventEmitter<Pelicula>; 
  @Input() public gestionado:boolean=false;
  constructor(private servicioVideoclub:ProveedorPeliculasService) { 
    this.eventoDetalle = new EventEmitter<Pelicula>();
  }

  ngOnInit(): void {
  }

  eliminarPelicula(){
    console.error("Eliminado pelicula..." + this.pelicula.titulo);
    this.servicioVideoclub.eliminarPelicula(this.pelicula);
  }

  mostrarDetalle(){
    console.warn("Mostrando detalle pelicula..." + this.pelicula.titulo);
    this.eventoDetalle.emit({...this.pelicula});
  }

}
