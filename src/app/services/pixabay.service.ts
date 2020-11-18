import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PixabayService {

  private endPoint: string = 'https://pixabay.com/api/?key=';
  private key: string = '13119377-fc7e10c6305a7de49da6ecb25';
  private Page: string = '&per_page=20';
  private query: string = '&q=';


  constructor(private http: HttpClient) {
    console.log('servicio on');
  }

  getAllImages(){
    return this.http.get(this.endPoint + this.key + this.Page);
  }

  getImagen( termino: string ){
    return this.http.get(this.endPoint + this.key + this.Page + this.query + termino);
  }

}
