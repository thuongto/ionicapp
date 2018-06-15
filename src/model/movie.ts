export class Movie{
  img: string;
  director: string;
  rating: string;
  moviename: string;
  year: string;
  description:string;

  constructor( img, director, rating, year,moviename,description){
    this.img = img;
    this.director = director;
    this.rating = rating;
    this.year = year;
    this.moviename = moviename;
    this.description= description;
    return this;
  }

}
