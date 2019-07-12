import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-movies-category',
  templateUrl: './movies-category.component.html',
  styleUrls: ['./movies-category.component.scss']
})
export class MoviesCategoryComponent implements OnInit {
  category: string;
  movies: object[] = [];
  page = 1 ;

  constructor(private route: ActivatedRoute,
    private llamadaApi: ApiServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params.category;
      this.page=1;
      this.llamadaApi.getCategory(this.category,this.page)
      .then((data: any) => {
        
        this.movies = data.results;
      }

      ).catch(Error);

    });
    
  }
  
  
  
  onScroll(){
  this.llamadaApi.getCategory(this.category,++this.page).then((data:any)=>{
    this.movies = [...this.movies, ...data.results]
  }).catch(error =>{
    console.log(error);
  })}}

