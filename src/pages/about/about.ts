import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatabaseserviceProvider } from '../../providers/databaseservice/databaseservice';
import { Movie } from '../../model/movie';
import { MoviesinfoPage } from '../../pages/moviesinfo/moviesinfo';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  movies: Array <Movie> = [];
  loadedMovies: Array <Movie> = [];

  constructor(public navCtrl: NavController, private database: DatabaseserviceProvider) {
    this.database.getAllMoviesFromFireBase((movies) => {
    if(movies){
    this.renderMovies(movies);
    }
    });
  }

  initializeItems(): void {
    this.movies = this.loadedMovies;
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;

    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
    this.movies = this.movies.filter((v) => {
      if(v.moviename && q) {
        if (v.moviename.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
    console.log(q, this.movies.length);
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
      this.loadedMovies = this.movies;

  }
  launchInfo(data){
    this.navCtrl.push(MoviesinfoPage, data);
  }

}
