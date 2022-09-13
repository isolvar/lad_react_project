import axios from "axios";
import { transformMovies } from "./transformers";

const DEBUG = true;

export async function fetchPopularMovies() {
    const url =
        "https://api.kinopoisk.dev/movie?field=rating.kp&search=7-10&field=year&search=2019-2022&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&&limit=20token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06";

    const debugUrl = "http://localhost:5555/goods";

    const req = DEBUG ? debugUrl : url;

    try {
        const response = await axios.get(req);
        console.log(response);
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
    const url = `https://api.kinopoisk.dev/movie?field=name&search=${searchName}&limit=20&token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06`;

    const debugUrl = "http://localhost:5555/search";

    const req = DEBUG ? debugUrl : url;
    try {
        const response = await axios.get(req);
        if (response.status === 200) {
            const transformedData = transformMovies(response.data.docs);
            return transformedData;
        }
    } catch (error) {
        console.log(error);
        return "error";
    }
}

export const apiGet = (request: { type: string; search: string }) => {
    let url = "";

    switch (request.type) {
        case "popular":
            if (DEBUG) {
                url = "http://localhost:5555/goods";
                break;
            }
            url =
                "https://api.kinopoisk.dev/movie?field=rating.kp&search=7-10&field=year&search=2019-2022&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&&limit=20token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06";
            break;
        case "search":
            if (DEBUG) {
                url = "http://localhost:5555/search";
                break;
            }
            url = `https://api.kinopoisk.dev/movie?field=name&search=${request.search}&limit=50&token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06`;
            break;
    }

    return axios.get(url);
};
