import { Component } from '@angular/core';

import { Libro } from '../../interfaces/libro';
import { DataServiceService } from '../../providers/data-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  displayedColumns: string[] = ['id_libro', 'titulo','anio_publicacion'];

  public data : Libro[] = [];

  constructor(private dataProvider: DataServiceService) { }

  ngOnInit() {
    this.dataProvider.getLibroResponse().subscribe((response) => { 
      this.data = (response as Libro[]); 
    })
  }

}
