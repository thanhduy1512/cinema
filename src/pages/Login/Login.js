import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserListApi } from '../../redux/actions/GetUserAction';
import "./Login.css"

export default function Login() {

    const { userList } = useSelector(state => state.GetUserReducer)
    const dispatch = useDispatch();
    let [state, setState] = useState({

    })

    const getUserList = () => {
        dispatch(getUserListApi())
    }

    useEffect(() => {
        // getUserList();
        return () => {

        }
    }, [])

    return (
        <div className="">
            <div className="signin" style={{ backgroundImage: `url('./background.jpg')` }}>
                <div className="signinWrapper">
                    <img className="singinHeader" src="./LoginImg/tixlogo.png" />
                    <form className="form-group">
                        <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Username" />
                        <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Password" />
                        <p style={{ fontSize: "11px" }}>Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!</p>
                        <button className="btnSignin btn">SIGN IN</button>
                        <p>
                            Nếu bạn chưa có tài khoản, hãy đăng kí tài khoản
                        <a href="/signup"> tại đây</a>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    )
}
