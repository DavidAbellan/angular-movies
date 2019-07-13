import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  API_URL = "https://api.themoviedb.org/3"
  API_KEY = "?api_key=80a1695fec74ccf4bb37c6b5c03ab6ee"

  constructor(private http : HttpClient) { }
  
  getCategory(cat,page) {
   return  this.http.get(`${this.API_URL}/movie/${cat}${this.API_KEY}&page=${page}`).toPromise();
   

  }
  getDetail(id) {
    return this.http.get(`${this.API_URL}/movie/${id}${this.API_KEY}`).toPromise();
  }

  getSimilarMovies(id,page){
    return this.http.get(`${this.API_URL}/movie/${id}/similar${this.API_KEY}&page=${page}`).toPromise();
  }
  lookingMovies (word,page) {
    return this.http.get(`${this.API_URL}/search/movie/${this.API_KEY}&query=${word}&page=${page}`).toPromise()
  }
  setRate(rate,id){
    rate = rate * 2; 
    let request = {'value': rate};
    console.log(request);
    return this.http.post(`${this.API_URL}/movie/${id}/rating${this.API_KEY}`,request).toPromise();
  } 
}
