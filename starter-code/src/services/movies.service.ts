import { Injectable } from '@angular/core';
import { allMovies} from 'sample-movies'
import {Movie} from '../interfaces/Movie.interface'


@Injectable()
export class MoviesService {
  movies: Array<Movie> = allMovies


    
    getMovies(){
      return this.movies;
  }


  getMovie(id){

    return this.movies.filter(e=> e.id == id)[0]
  }
}