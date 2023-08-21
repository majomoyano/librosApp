import { Component } from '@angular/core';

import { Genero } from '../../interfaces/genero';
import { Libro } from '../../interfaces/libro';
import { DataServiceService } from '../../providers/data-service.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  //displayedColumns: string[] = ['id_genero', 'nombre'];

  selectedValue: string="";
  public dataGenero : Genero[] = [];

  displayedColumns: string[] = ['id_libro', 'titulo', 'anio_publicacion'];
  public dataLibro : Libro[] = [];
  public originalDataLibro: Libro[] = [];

  constructor(private dataProvider: DataServiceService) { }

  ngOnInit() {
    this.dataProvider.getGeneroResponse().subscribe((response) => { 
      this.dataGenero = (response as Genero[]); 
    })

    this.dataProvider.getLibroResponse().subscribe((response) => { 
      this.dataLibro = (response as Libro[]); 
      this.originalDataLibro = (response as Libro[]); 
    })
  }

  applyFilter() {
    if (this.selectedValue) {
      this.dataLibro = this.originalDataLibro.filter(libro => libro.id_genero === parseInt(this.selectedValue));
    } else {
      // Reset the data when no filter is applied
      this.dataProvider.getLibroResponse().subscribe((response) => {
        this.dataLibro = this.originalDataLibro;
      });
    }
  }

  
}
