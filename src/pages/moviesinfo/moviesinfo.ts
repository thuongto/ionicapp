import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MoviesinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moviesinfo',
  templateUrl: 'moviesinfo.html',
})
export class MoviesinfoPage {
  img: string;
  director: string;
  rating: string;
  moviename: string;
  year: string;
  description:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.img = navParams.data.image;
    this.director = navParams.data.director;
    this.rating = navParams.data.rating;
    this.moviename = navParams.data.moviename;
    this.year = navParams.data.year;
    this.description = navParams.data.description;
    console.log(navParams);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesinfoPage');
  }

}
