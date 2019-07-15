import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  API_URL = "https://api.themoviedb.org/3";
  API_KEY = "?api_key=80a1695fec74ccf4bb37c6b5c03ab6ee";
  CORS = "https://crossorigin.me/";

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
    return this.http.get(`${this.API_URL}/search/movie${this.API_KEY}&query=${word}&page=${page}`).toPromise()
  }
  setRate(rate,id){
    rate = rate * 2; 
    let request = {'value': rate};
    return this.http.post(`${this.API_URL}/movie/${id}/rating${this.API_KEY}`,request).toPromise();
  } 
  getGenreMovies(genre,page){
    return this.http.get(`${this.API_URL}/discover/movie${this.API_KEY}&language=en-US&sort_by=vote_count.desc&with_genres=${genre}&page=${page}`).toPromise();
  }
  getCast (id){
    return this.http.get(`${this.API_URL}/movie/${id}/credits${this.API_KEY}`).toPromise();
  }
  getPerson(id){
    return this.http.get(`${this.API_URL}/person/${id}${this.API_KEY}`).toPromise();
  }
  getPersonMovies(id,page){
    return this.http.get(`${this.API_URL}/discover/movie${this.API_KEY}&language=en-US&sort_by=vote_count.desc&with_people=${id}&page=${page}`).toPromise();
  }
}
