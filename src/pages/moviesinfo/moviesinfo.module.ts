import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviesinfoPage } from './moviesinfo';

@NgModule({
  declarations: [
    MoviesinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MoviesinfoPage),
  ],
})
export class MoviesinfoPageModule {}
