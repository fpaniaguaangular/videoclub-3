import { TestBed } from '@angular/core/testing';

import { ProveedorPeliculasService } from './proveedor-peliculas.service';

describe('ProveedorPeliculasService', () => {
  let service: ProveedorPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedorPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
