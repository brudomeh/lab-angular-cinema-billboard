import { Component, OnInit } from '@angular/core';
import {MoviesService} from 'services/movies.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  movieid:number;
  movie:object;


  constructor(public movieS: MoviesService, public route:ActivatedRoute) { }


  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.movieid = Number(params['id'])
        this.movie = this.movieS.getMovie(this.movieid)
      });
    
  }
}

