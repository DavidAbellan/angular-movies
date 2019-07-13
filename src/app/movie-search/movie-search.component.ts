import { Component, OnInit, Input } from '@angular/core';
import { ApiServiceService} from '../services/api-service.service'

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  @Input() word : any ;
  movies : any;
  page : number = 1;
  constructor(private llamadaApi : ApiServiceService) { }
  
  ngOnInit() {
    
   
  }
  lookup(word) : void  {
      this.llamadaApi.lookingMovies(word,this.page).then(res =>{
        this.word = word;
        console.log(res);
        let resultados : any  = res.results;
        this.movies = resultados;
        this.page = 1;
       }).catch(Error)
    

  }
  onScroll(){
    this.llamadaApi.lookingMovies(this.word,++this.page).then((data:any)=>{
      this.movies = [...this.movies, ...data.results]
    }).catch(error =>{
      console.log(error);
    })}
  
 


}
