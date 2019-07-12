import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService} from '../services/api-service.service';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie : object = {};
  id : any;
  similarMovies : object[] = []
  page:number=1;

  constructor( private route : ActivatedRoute, private llamadaApi :  ApiServiceService) { }
  ngOnInit() {
    this.id = this.route.params;

     this.llamadaApi.getDetail(this.id.value.id).then((data:any)=>{
         
       this.movie = data ;
       
       this.llamadaApi.getSimilarMovies(this.id.value.id,this.page).then((movies:any) => {
         this.similarMovies = movies.results;
         this.page = 1;
 
       }).catch(Error);
      } ).catch(Error);
      

  }
  onScroll(){
    this.llamadaApi.getSimilarMovies(this.id.value.id,++this.page).then((data:any)=>{
      this.similarMovies = [...this.similarMovies, ...data.results]
    }).catch(error =>{
      console.log(error);
    })}
  
}
