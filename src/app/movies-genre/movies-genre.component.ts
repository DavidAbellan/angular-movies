import { Component, OnInit } from '@angular/core';
import { ApiServiceService} from '../services/api-service.service'
import {ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movies-genre',
  templateUrl: './movies-genre.component.html',
  styleUrls: ['./movies-genre.component.scss']
})
export class MoviesGenreComponent implements OnInit {
  genero : any;
  movies : any;
  page: number = 1;
  nombreGenero : string ;
  
  constructor(private llamadaApi : ApiServiceService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.nombreGenero = this.route.snapshot.queryParams.name;
    this.genero = this.route.params;
    this.genero = this.genero.value.genre;
    this.llamadaApi.getGenreMovies(this.genero,this.page).then(res => {
      this.movies = res;
      this.movies = this.movies.results;
      this.page = 1;

    }).catch(Error)
  }
  onScroll(){
    this.llamadaApi.getGenreMovies(this.genero,++this.page).then((data:any)=>{
      this.movies = [...this.movies, ...data.results]
    }).catch(error =>{
      console.log(error);
    })}


  
}
