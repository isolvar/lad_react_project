import { IMovie } from "../store/moviesSlice";
import { responsePopMovieDataType } from "./responsePopMovieExample";

export function transformMovies(moviesData: responsePopMovieDataType) {
    const movies: IMovie[] = [];
    for (const movie of moviesData) {
        const tempMovie: IMovie = {
            id: movie.id,
            posterUrl: movie.poster.url,
            rating: movie.rating.imdb * 10,
            nameRU: movie.name,
            nameEN: movie.alternativeName,
            year: movie.year,
            description: movie.description,
            duration: movie.movieLength,
            watched: false,
        };
        movies.push(tempMovie);
    }

    return movies;
}
