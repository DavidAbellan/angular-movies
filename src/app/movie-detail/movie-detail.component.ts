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
  id : number;
  similarMovies : object[] = []
  page:number=1;
  rate : number;

  constructor( private route : ActivatedRoute, private llamadaApi :  ApiServiceService) { }
  ngOnInit() {
    this.id = this.route.params.value.id;

     this.llamadaApi.getDetail(this.id).then((data:any)=>{
         
       this.movie = data ;
       this.rate = Number(data.vote_average);
       this.rate = this.rate / 2;
       console.log(this.rate);
       
       this.llamadaApi.getSimilarMovies(this.id,this.page).then((movies:any) => {
         this.similarMovies = movies.results;
         this.page = 1;
 
       }).catch(Error);
      } ).catch(Error);
      

  }
  onScroll(){
    this.llamadaApi.getSimilarMovies(this.id,++this.page).then((data:any)=>{
      this.similarMovies = [...this.similarMovies, ...data.results]
    }).catch(error =>{
      console.log(error);
    })}

  setRate(e) {
    this.llamadaApi.setRate(e,this.id).then((data:any) =>{
       console.log('DATAAA',data);
    }).catch(error => {
      console.log(error);
    })


  }  
  
}
