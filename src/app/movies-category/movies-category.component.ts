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
  constructor(private route: ActivatedRoute,
    private llamadaApi: ApiServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params.category;
      this.llamadaApi.getCategory(this.category)
      .then((data: any) => {
        
        this.movies = data.results
        console.log(data.results);

      }

      ).catch(Error);

    });




  }
}


