import axios from 'axios';
import { GET_USER_API } from '../constants/GetUserConstants';

export const getUserListApi = () => {
    return dispatch => {
        let promise = axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01',
            method: 'GET'
        });

        promise.then((res) => {
            console.log(res.data);
            dispatch({
                type: GET_USER_API,
                userList: res.data
            })
        });

        promise.catch((err) => {
            console.log(err.response.data);
        })
    }
}

export const userSignupApi = (createUser) => {
    return dispatch => {
        let promise = axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            method: 'POST',
            data: { createUser: createUser }
        });

        promise.then((res) => {
            dispatch(getUserListApi())
        })

        promise.catch((err) => {
            console.log(err.response);
        })
    }
}