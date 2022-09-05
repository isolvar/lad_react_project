import axios from "axios";

export async function fetchPopularMovies() {
    const url =
        "https://api.kinopoisk.dev/movie?field=rating.kp&search=7-10&field=year&search=2019-2022&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06";

    try {
        const response = await axios.get(url);
        console.log(response);
        if (response.status === 200) {
            return response.data.docs;
        }
    } catch (error) {
        console.log(error);
    }
}
