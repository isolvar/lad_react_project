import { IMovie } from "../store/moviesSlice";

export function transformMovies(moviesData: any) {
    const movies: IMovie[] = [];
    let tempMovie: IMovie = {};
    for (const movie of moviesData) {
        tempMovie.id = movie.id;
        tempMovie.posterUrl = movie.poster.url;
        tempMovie.rating = movie.rating.imdb * 10;
        tempMovie.nameRU = movie.name;
        tempMovie.nameEN = movie.alternativeName;
        tempMovie.year = movie.year;
        tempMovie.description = movie.description;
        tempMovie.duration = movie.movieLength;

        movies.push(tempMovie);
        tempMovie = {};
    }

    return movies;
}
