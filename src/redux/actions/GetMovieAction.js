import axios from 'axios';
import { GET_MOVIE_API, GET_MOVIE_INFO_API, GET_MOVIE_SHOWTIME_API, GET_THEATER_API, GET_THEATER_INFO_API, GET_THEATER_SHOWTIME_API } from '../constants/GetMovieConstants';

export const getMovieListApi = () => {
    return dispatch => {
        let promise = axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        });

        promise.then((res) => {
            dispatch({
                type: GET_MOVIE_API,
                movieList: res.data
            })
        });

        promise.catch((err) => {
            console.log(err.response.data);
        })
    }
}

export const getTheaterListApi = () => {
    return dispatch => {
        let promise = axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap',
            method: 'GET'
        });

        promise.then((res) => {
            console.log(res.data);
            dispatch({
                type: GET_THEATER_API,
                theaterList: res.data
            })
        });
        promise.catch((err) => {
            console.log(err.response.data);
        })
    }
}



export const getTheaterInfoApi = (maHeThongRap) => {
    return dispatch => {
        let promise = axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
            method: 'GET'
        });

        promise.then((res) => {
            console.log(res.data);
            dispatch({
                type: GET_THEATER_INFO_API,
                theaterInfo: res.data,

            })
        });
        promise.catch((err) => {
            console.log(err.response.data);
        })
    }
}

export const getTheaterShowtimeApi = (maHeThongRap) => {
    return dispatch => {
        let promise = axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`,
            method: 'GET'
        });

        promise.then((res) => {
            console.log(res.data);
            dispatch({
                type: GET_THEATER_SHOWTIME_API,
                theaterShowtime: res.data,
            })
        });

        promise.catch((err) => {
            console.log(err.response.data);
        })
    }
}

export const getMovieShowtimeApi = () => {
    return dispatch => {
        let promise = axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=1314`,
            method: 'GET'
        });

        promise.then((res) => {
            console.log(res.data);
            dispatch({
                type: GET_MOVIE_SHOWTIME_API,
                movieShowtime: res.data,
            })
        });

        promise.catch((err) => {
            console.log(err.response.data);
        })
    }
}

export const getMovieInfoApi = () => {
    return dispatch => {
        let promise = axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=1314`,
            method: 'GET'
        });

        promise.then((res) => {
            console.log(res.data);
            dispatch({
                type: GET_MOVIE_INFO_API,
                movieInfo: res.data,
            })
        });

        promise.catch((err) => {
            console.log(err.response.data);
        })
    }
}