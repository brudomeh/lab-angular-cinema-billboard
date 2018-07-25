import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import { Movie } from "../../interfaces/Movie.interface";

@Component({
  selector: "app-my-home",
  templateUrl: "./my-home.component.html",
  styleUrls: ["./my-home.component.css"]
})
export class MyHomeComponent implements OnInit {
  constructor(public movieS: MoviesService) {}

  moviesList: Array<Movie> = this.movieS.getMovies();
  ngOnInit() {}

}
