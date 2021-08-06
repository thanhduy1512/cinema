import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieListApi } from '../../redux/actions/GetMovieAction';
import './MovieList.css';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
        />
    );
}

export default function MovieList(props) {
    var settings = {
        dots: false,
        className: ' ',
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 2,
        slidesPerRow: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const { movieList } = useSelector(state => state.GetMovieReducer);
    const dispatch = useDispatch();

    let [state, setState] = useState({
        movie: []

    })

    const getMovieList = () => {
        dispatch(getMovieListApi())
    }

    useEffect(() => {
        getMovieList();
        return () => {

        }
    }, [])

    const renderMovieList = () => {
        return movieList.map((phim, index) => {
            return <div key={index} className='col-3' height="">
                <div>
                    <div className="card text-black ">
                        <img className="card-img-top" src={phim.hinhAnh} alt />
                        <div className="card-body">
                            <p className="card-text">{phim.tenPhim}</p>
                        </div>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="title">
                    <h4>Đang chiếu</h4>
                </div>
                <div className="title">
                    <h4>Sắp chiếu</h4>
                </div>
            </div>

            <div>
                <div className="example container" style={{ height: '' }}>

                    <Slider {...settings} >
                        {renderMovieList()}
                    </Slider>
                </div>
            </div>
            <div>
                <div className=' w-100'>
                    <div>
                        <img style={{ width: '100%', height: '120px', display: 'block', objectFit: 'cover' }} src="./hinhtrang.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}
