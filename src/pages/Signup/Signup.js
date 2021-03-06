import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userSignupApi } from '../../redux/actions/GetUserAction';

export default function Signup() {

    const { } = useSelector(state => state.GetUserReducer)
    const dispatch = useDispatch();
    let [state, setCreateUser] = useState({
        createUser: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "GP01",
            maLoaiNguoiDung: "KhachHang",
            hoTen: ""
        }
    })

    console.log(state.createUser);

    const userSignup = (e) => {
        e.preventDefault();
        console.log(state.createUser);
        dispatch(userSignupApi(state.createUser))
    }

    const handleChange = (e) => {
        let { name, value } = e.target;

        let newCreateUser = { ...state.createUser }
        newCreateUser = { ...newCreateUser, [name]: value }

        setCreateUser({
            ...state,
            createUser: newCreateUser
        });
    }



    return (
        <div className="">
            <div className="signin" style={{ backgroundImage: `url('./background.jpg')` }}>
                <div className="signinWrapper">
                    <img className="singinHeader" src="./LoginImg/tixlogo.png" />
                    <form className="form-group" onSubmit={userSignup}>
                        <input type="text" className="form-control" name="taiKhoan" id onChange={handleChange} aria-describedby="helpId" placeholder="Username" />
                        <input type="password" className="form-control" name="matKhau" id onChange={handleChange} aria-describedby="helpId" placeholder="Password" />
                        <input type="text" className="form-control" name="hoTen" id onChange={handleChange} aria-describedby="helpId" placeholder="Full Name" />
                        <input type="email" className="form-control" name="email" id onChange={handleChange} aria-describedby="helpId" placeholder="Email" />
                        <input type="number" className="form-control" name="soDt" id onChange={handleChange} aria-describedby="helpId" placeholder="Phone Number" />
                        <p style={{ fontSize: "11px" }}>????ng k????t??i kho???n ????? ???????c nhi???u ??u ????i, mua v?? v?? b???o m???t th??ng tin!</p>
                        <button onClick={userSignup} className="btnSignin btn">SIGN UP</button>
                        <p>
                            N???u b???n ???? c?? t??i kho???n, h??y ????ng nh???p
                        <a href="/login"> t???i ????y</a>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    )
}
