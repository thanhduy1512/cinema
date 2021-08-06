import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieInfoApi, getMovieShowtimeApi, getTheaterInfoApi, getTheaterListApi, getTheaterShowtimeApi } from '../../redux/actions/GetMovieAction';

export default function MovieTable() {

    let [state, setState] = useState({
        numb: 0,
        maHeThongRap: 'BHDStar',
        maCumRap: 'bhd-star-cineplex-3-2'
    })

    const { theaterList, theaterInfo, theaterShowtime } = useSelector(state => state.GetMovieReducer);

    const dispatch = useDispatch();

    const getTheaterList = () => {
        dispatch(getTheaterListApi())
    }

    const getTheaterInfo = (maHeThongRap) => {
        dispatch(getTheaterInfoApi(maHeThongRap))
    }

    const getTheaterShowtime = (maHeThongRap) => {
        dispatch(getTheaterShowtimeApi(maHeThongRap))
    }

    const getMovieInfo = () => {
        dispatch(getMovieInfoApi())
    }

    const getMovieShowtime = () => {
        dispatch(getMovieShowtimeApi())
    }

    useEffect(() => {
        getTheaterList();
        getTheaterShowtime(state.maHeThongRap);
        getTheaterInfo(state.maHeThongRap);

        return () => {

        }
    }, [])

    const renderSetState = (index, maHeThongRap) => {
        setState({
            ...state,
            numb: index,
            maHeThongRap: maHeThongRap,
        })
    }




    const renderTheater = () => {
        return theaterList.map((rap, index) => {
            return <div key={index}>
                <div >
                    <img
                        onClick={() => {
                            getTheaterShowtime(rap.maHeThongRap)
                            getTheaterInfo(rap.maHeThongRap)

                            renderSetState(index, rap.maHeThongRap)

                        }}
                        style={{ cursor: 'pointer', height: "80px", width: '80px', padding: '10px' }}
                        src={rap.logo} />
                </div>
            </div>
        })
    }

    const renderTheaterInfo = () => {
        console.log(state.maHeThongRap);
        return theaterInfo.map((item, index) => {
            return <div style={{ overflow: 'scroll' }}
                onClick={() => {
                    setState({
                        ...state,
                        maCumRap: item.maCumRap
                    })
                }}
                key={index}>
                <img
                    src={theaterList[state.numb].logo}
                    style={{ cursor: 'pointer', height: "80px", width: '80px', padding: '10px' }}
                />
                <h4>{item.tenCumRap}</h4>
                <p>{item.diaChi}</p>
            </div>
        })
    }

    const renderTheaterShowtime = () => {

        return theaterShowtime.map((item, index) => {
            var itemMaCumRap = item.lstCumRap.find(({ maCumRap }) => maCumRap === state.maCumRap);
            console.log(itemMaCumRap);
            return <div key={index}>
                <div className="container">
                    <div style={{ display: 'grid', overflow: 'scroll', height: '600px' }} className="dropdown">
                        {

                            itemMaCumRap ? itemMaCumRap.danhSachPhim.map((item, index) => {
                                return <button key={index} className="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img style={{ height: '50px', width: '50px' }} src={item.hinhAnh} />
                                </button>

                            }) : ''
                        }
                        <div className="dropdown-menu" aria-labelledby="triggerId">
                            <button className="dropdown-item" href="#">Action</button>
                            <button className="dropdown-item disabled" href="#">Disabled action</button>
                        </div>
                    </div>

                </div>
            </div>
        })
    }

    return (
        <div className="container d-flex">
            <div>
                {renderTheater()}
            </div>

            <div style={{ height: '600px', overflow: 'scroll' }}>

                {renderTheaterInfo()}
            </div>

            <div style={{ width: '100%' }}>
                {renderTheaterShowtime()}
            </div>

            <div>


            </div>

        </div>
    )
}
