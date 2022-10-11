import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { ProveedorPeliculasService } from 'src/app/services/proveedor-peliculas.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  public nuevoTitulo:string="";
  @Input() public peliculaDetallada:Pelicula|any;
  @Output() public eventoCerrar:EventEmitter<any>;

  constructor(private servicioVideoclub:ProveedorPeliculasService) { 
    this.eventoCerrar=new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.nuevoTitulo=this.peliculaDetallada.titulo;
  }

  public cerrar():void{
    console.error("CERRANDO...(PENDIENTE)");
    this.eventoCerrar.emit();
  }

  guardar():void{
    this.servicioVideoclub.modificarTituloPeliculo(this.peliculaDetallada, this.nuevoTitulo);
  }
}
