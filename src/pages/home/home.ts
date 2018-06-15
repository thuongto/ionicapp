import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DatabaseserviceProvider } from '../../providers/databaseservice/databaseservice';
import { Movie } from '../../model/movie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies: Array <Movie> = [];

  constructor(public navCtrl: NavController,
              private database: DatabaseserviceProvider) {

    this.database.getAllMoviesFromFireBase((movies) => {
      if(movies){
        this.renderMovies(movies);
      }
    });
  }

  renderMovies(movies){
    //count the number of objects using the keys
      var count = Object.keys(movies).length;
      //get the keys of objects and store in keys array
      var keys = Object.keys(movies);
      this.movies = [];
      for(let i:number =0; i< count; i++){
        this.movies.push( movies[ keys[i] ]);
      }
  }

}
