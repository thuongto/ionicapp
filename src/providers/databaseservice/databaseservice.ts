import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import firebase from 'firebase';

/*
  Generated class for the DatabaseserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseserviceProvider {


  constructor(public http: HttpClient) {
  }

  getAllMoviesFromFireBase(callback){
   firebase.database().ref().once('value').then( (snapshot) => {
  //firebase.database().ref().on('value',(snap) => {
      callback( snapshot.val() );
    });
  }


}
