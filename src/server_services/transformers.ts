interface IMovies {
    id?: number;
    posterUrl?: string;
    rating?: number;
    nameRU?: string;
    nameEN?: string;
    year?: number;
    description?: string;
    duration?: number;
}

export function transformMovies(moviesData: any) {
    const movies: IMovies[] = [];
    let tempMovie: IMovies = {};
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
