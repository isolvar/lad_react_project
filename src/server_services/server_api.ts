import axios from "axios";
import { transformMovies } from "./transformers";

export async function fetchPopularMovies() {
    // const url =
    //     "https://api.kinopoisk.dev/movie?field=rating.kp&search=7-10&field=year&search=2019-2022&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&&limit=20token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06";

    const url = "http://localhost:5555/goods";

    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            const transformedData = transformMovies(response.data.docs);
            return transformedData;
        }
    } catch (error) {
        console.log(error);
        return "error";
    }
}

export async function fetchSearchMovie(searchName: string) {
    // const url = `https://api.kinopoisk.dev/movie?field=name&search=${searchName}&limit=20&token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06`;

    const url = "http://localhost:5555/search";
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            const transformedData = transformMovies(response.data.docs);
            return transformedData;
        }
    } catch (error) {
        console.log(error);
        return "error";
    }
}
