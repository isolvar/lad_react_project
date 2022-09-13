import axios from "axios";

const DEBUG = true;

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
