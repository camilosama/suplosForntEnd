import { Component } from '@angular/core';
import { PixabayService } from '../../services/pixabay.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent  {

  nuevasImagenes: any[] = [];
  loading: boolean;

  constructor(private pixaby: PixabayService) { }

  buscar( termino: string ){
    this.loading = true;
    console.log(termino);
    this.pixaby.getImagen(termino)
    .subscribe( (data: any ) => {
      console.log(data.hits);
      this.nuevasImagenes = data.hits;
      this.loading = false;
    });
  }
  callApi( termino: string ){
    this.loading = true;
    console.log(termino);
    this.pixaby.getImagen(termino)
    .subscribe( (data: any ) => {
      console.log(data.hits);
      this.nuevasImagenes = data.hits;
      this.loading = false;
    });
  }

}
