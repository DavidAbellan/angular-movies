import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieSearchComponent} from './movie-search/movie-search.component';
import{ MoviesGenreComponent} from './movies-genre/movies-genre.component';


const routes: Routes = [
  {
    path: 'movies/genre/:genre' , component : MoviesGenreComponent
   },
  {
   path: 'movies/search' , component : MovieSearchComponent
  },
  {
   path:'movies/:category', component : MoviesCategoryComponent,
  },
  { 
   path:'detail/:id' , component : MovieDetailComponent
  },
 { 
   path:'**', redirectTo:'/movies/top_rated',
  }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
