import { Routes } from "@angular/router";
import { MyHomeComponent } from './my-home/my-home.component'
import { MyMovieComponent } from './my-movie/my-movie.component'

export const routes: Routes = [
    { path: '',  component: MyHomeComponent },
    { path: 'movie/:id', component: MyMovieComponent }
  ];

  