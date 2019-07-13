import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';
import { ApiServiceService } from './services/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormatDatePipe } from './format-date.pipe';
import { MoviesLayoutComponent } from './movies-layout/movies-layout.component';
import { InfiniteScrollModule} from 'ngx-infinite-scroll';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { SetStarsPipe } from './set-stars.pipe';
import { NgxStarsModule } from 'ngx-stars';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MoviesCategoryComponent,
    FormatDatePipe,
    MoviesLayoutComponent,
    MovieDetailComponent,
    MovieSearchComponent,
    SetStarsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgxStarsModule
  ],
  providers: [ ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
