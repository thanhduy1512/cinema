import React from 'react';
import './Carousel.css'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active dot" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} className="dot" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} className="dot" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={3} className="dot" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={4} className="dot" />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./Carousel/hinh1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item ">
                        <img src="./Carousel/hinh2.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./Carousel/hinh3.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./Carousel/hinh4.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./Carousel/hinh5.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="container grid">
                <div className="row">
                    <div className="col-3">
                        <div className="item">
                            <div class="dropdown open">
                                <p>Phim</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="item">
                            <p>Rạp</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="item">
                            <p>Ngày giờ xuất chiếu</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="item">
                            <button>
                                <span>Mua vé ngay</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
