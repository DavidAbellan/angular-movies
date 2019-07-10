import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  API_URL = "https://api.themoviedb.org/3"
  API_KEY = "?api_key=80a1695fec74ccf4bb37c6b5c03ab6ee"

  constructor(private http : HttpClient) { }
  
  getCategory(cat) {
    console.log('CAT:::',cat);
   return  this.http.get(`${this.API_URL}/movie/${cat}${this.API_KEY}`).toPromise();
   

  }

}
