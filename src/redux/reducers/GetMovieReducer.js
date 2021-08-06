import { GET_MOVIE_API, GET_MOVIE_INFO_API, GET_MOVIE_SHOWTIME_API, GET_THEATER_API, GET_THEATER_INFO_API, GET_THEATER_SHOWTIME_API } from '../constants/GetMovieConstants';

const initialState = {
    movieList: [],
    theaterList: [],
    theaterInfo: [],
    theaterShowtime: [],
    movieInfo: [],
    movieShowtime: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_MOVIE_API:
            state.movieList = action.movieList;
            return { ...state }
            break;

        case GET_THEATER_API:
            state.theaterList = action.theaterList;
            return { ...state }
            break;

        case GET_THEATER_INFO_API:
            state.theaterInfo = action.theaterInfo;
            return { ...state }
            break;

        case GET_THEATER_SHOWTIME_API:
            state.theaterShowtime = action.theaterShowtime;
            return { ...state }
            break;

        case GET_MOVIE_INFO_API:
            state.movieInfo = action.movieInfo;
            return { ...state }
            break;

        case GET_MOVIE_SHOWTIME_API:
            state.movieShowtime = action.movieShowtime;
            return { ...state }
            break;

        default:
            return state
    }
}