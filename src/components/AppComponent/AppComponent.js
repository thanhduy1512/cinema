import React from 'react';
import './AppComponent.css';
import Slider from "react-slick";

export default function AppComponent() {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div className="" style={{ height: '700px', backgroundImage: `url('./background.jpg')`, padding: '120px 0 80px 0' }}>
            <div className='example'>
                <div className="row">
                    <div className="col-md-6">
                        <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
                        <p className="textLeft">người yêu điện ảnh</p>
                        <br />
                        <p className="textSmallLeft">Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                        <br />
                        <button className="buttonLeft" onClick={() => window.open('https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8', '_blank')}>App miễn phí - Tải về ngay!</button>
                        <p className="textSmallLeft" style={{ paddingTop: "10px" }}>
                            TIX có hai phiên bản
                            <a className="tagA" target="_blank" href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"> IOS </a>
                             &
                            <a className="tagA" target="_blank" href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"> Android</a>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img style={{ padding: '0 23%' }} src="./mobile.png" />
                        <Slider className="sliderScreen" {...settings}>
                            <div>
                                <img src="./AppImg/slide1.jpeg" />
                            </div>
                            <div>
                                <img src="./AppImg/slide2.jpeg" />
                            </div>
                            <div>
                                <img src="./AppImg/slide3.jpeg" />
                            </div>
                            <div>
                                <img src="./AppImg/slide4.jpeg" />
                            </div>
                            <div>
                                <img src="./AppImg/slide5.jpeg" />
                            </div>
                            <div>
                                <img src="./AppImg/slide6.jpeg" />
                            </div>
                            <div>
                                <img src="./AppImg/slide7.jpeg" />
                            </div>
                            <div>
                                <img src="./AppImg/slide8.jpeg" />
                            </div>
                            <div>
                                <img src="./AppImg/slide9.jpeg" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

