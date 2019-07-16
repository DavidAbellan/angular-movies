import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  id: any;
  similarMovies: object[] = []
  page: number = 1;
  rate: number;
  cast : object[] = [];
  director : object[] = [];

  constructor(private route: ActivatedRoute, private llamadaApi: ApiServiceService) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
    window.scrollTo({top:0});
    this.id = params.id;
    this.rate = undefined;
    this.llamadaApi.getDetail(this.id).then((data: any) => {
      
      this.movie = data;
      this.rate = Number(data.vote_average);
      this.rate = this.rate / 2;
     
     }).catch(console.error);
    this.llamadaApi.getSimilarMovies(this.id, this.page).then((movies: any) => {
      this.similarMovies = movies.results;
      this.page = 1;

    }).catch(console.error); 
    
    this.llamadaApi.getCast(this.id).then((data : any)=>{
      this.cast = data.cast ;
       this.director = data.crew.filter(c => {
        if (c.job === "Director"){
          return c;
        }
      }) 
      console.log(this.director);
      
    })

  });
  }
  

  onScroll() {
    this.llamadaApi.getSimilarMovies(this.id, ++this.page).then((data: any) => {
      this.similarMovies = [...this.similarMovies, ...data.results]
    }).catch(error => {
      console.log(error);
    })
  }

  setRate(e) {
    this.llamadaApi.setRate(e, this.id).then((data: any) => {
    }).catch(error => {
      console.log(error);
    })


  }

}
