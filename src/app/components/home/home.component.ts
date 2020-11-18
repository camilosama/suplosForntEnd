import { Component, OnInit } from '@angular/core';
import { PixabayService } from '../../services/pixabay.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasImagenes: any[] = [];
  loading: boolean;

  constructor(private pixaby: PixabayService) {

    this.loading = true;

    this.pixaby.getAllImages()
    .subscribe( (data:any) => {
      console.log(data.hits);
      this.nuevasImagenes = data.hits;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}
