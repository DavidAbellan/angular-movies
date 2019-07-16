import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-movies-director',
  templateUrl: './movies-director.component.html',
  styleUrls: ['./movies-director.component.scss']
})
export class MoviesDirectorComponent implements OnInit {
  id : number;
  character : any;
  movies : any;
  page : number = 1;

  constructor(private route : ActivatedRoute, private LlamadaApi : ApiServiceService ) { }

  ngOnInit() {
    this.route.params.subscribe (params => {
      window.scrollTo({top:0});
      this.page = 1;
      this.id = params.id;
      this.LlamadaApi.getPerson(this.id).then(data =>{
        this.character = data;
        console.log(this.character);
        
      }).catch(console.error);
    this.LlamadaApi.getPersonMovies(this.id,this.page).then(data => {
      console.log(data);
      this.movies = data
      this.movies = this.movies.results;
    }).catch(console.error)
    
    
    })
    
    
  }
  
  onScroll() {
    this.LlamadaApi.getPersonMovies(this.id, ++this.page).then((data: any) => {
      this.movies = [...this.movies, ...data.results]
    }).catch(error => {
      console.log(error);
    })
    
  

}}
