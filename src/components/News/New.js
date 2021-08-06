import React from 'react';
import './News.css';

export default function New() {
    return (
        <div style={{}} className="container">
            <div>
                <div className=' w-100'>
                    <div>
                        <img style={{ width: '100%', height: '120px', display: 'block', objectFit: 'cover' }} src="./hinhtrang.png" />
                    </div>
                </div>
            </div>
            <ul className="nav nav-tabs navCenter" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <li className="title nav-item">
                    <a className='' data-toggle="tab" data-target="#news" aria-expanded="true" style={{ textDecoration: 'none', color: 'none' }}>Tin Tức</a>
                </li>
                <li className="title nav-item">
                    <a className='' data-toggle="tab" data-target="#reviews" aria-expanded="false" style={{ textDecoration: 'none', color: 'none' }}>Review</a>
                </li>
                <li className="title nav-item">
                    <a className='' data-toggle="tab" data-target="#promotion" aria-expanded="false" style={{ textDecoration: 'none', color: 'none' }}>Khuyến Mãi</a>
                </li>
            </ul>
            <div className='container'>
                <div className=" example ">
                    <div className='tab-content '>
                        <div id='news' className=' tab-pane  in active ' >
                            <div className='row '>
                                <div className='col-sm-6 col-md-6'>
                                    <div>
                                        <div>
                                            <a target='_blank' href="https://zingnews.vn/thang-duy-dong-phim-moi-cua-dao-dien-co-hau-gai-post1141317.html">
                                                <img src="https://znews-photo.zadn.vn/w480/Uploaded/aobovhp/2020_10_13/79332148_1279114445594121_7816999534243872768_n.jpg" />
                                            </a>
                                        </div>
                                        <a target='_blank' href="https://zingnews.vn/thang-duy-dong-phim-moi-cua-dao-dien-co-hau-gai-post1141317.html">
                                            <p>Thang Duy đóng phim mới của đạo diễn ‘Cô hầu gái’</p>
                                        </a>
                                        <p>  “Decision to Leave” - dự án điện ảnh mới của đạo diễn Park Chan Wook - sẽ khởi quay trong cuối tháng 10 với Thang Duy và Park Hae Il đóng chính.</p>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-md-6'>
                                    <div>
                                        <div>
                                            <a target='_blank' href="https://zingnews.vn/thang-duy-dong-phim-moi-cua-dao-dien-co-hau-gai-post1141317.html">
                                                <img src="https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2020_10_14/spidey3_image05.jpg" />
                                            </a>
                                        </div>
                                        <a target='_blank' href="https://zingnews.vn/thang-duy-dong-phim-moi-cua-dao-dien-co-hau-gai-post1141317.html">
                                            <p>10 bộ ba phim thất bại ở phần cuối</p>
                                        </a>
                                        <p>“Lời nguyền phần phim thứ ba” là điều phổ biến tại Hollywood khi các trilogy thành công rực rỡ trong hai phần đầu rồi đột ngột sụt giảm về chất lượng ở tập cuối.</p>
                                    </div>
                                </div>
                                <div className='col-sm-4 col-md-4'>
                                    <div>
                                        <div>
                                            <a target='_blank' href="https://zingnews.vn/thang-duy-dong-phim-moi-cua-dao-dien-co-hau-gai-post1141317.html">
                                                <img src="https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2020_10_20/sinister_baguul.jpg" />
                                            </a>
                                        </div>
                                        <a target='_blank' href="https://zingnews.vn/thang-duy-dong-phim-moi-cua-dao-dien-co-hau-gai-post1141317.html">
                                            <p>Bộ phim kinh dị đáng sợ nhất mọi thời đại</p>
                                        </a>
                                        <p>Nghiên cứu khoa học chỉ ra bộ phim kinh dị siêu nhiên “Sinister” (2012) của đạo diễn Scott Derrickson là tác phẩm đáng sợ nhất mọi thời đại.</p>
                                    </div>
                                </div>
                                <div className='col-sm-4 col-md-4'>

                                    <div>
                                        <div>
                                            <a target='_blank' href="https://zingnews.vn/thang-duy-dong-phim-moi-cua-dao-dien-co-hau-gai-post1141317.html">
                                                <img src="https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2020_10_21/perfect3.jpeg" />
                                            </a>
                                        </div>
                                        <a target='_blank' href="https://zingnews.vn/thang-duy-dong-phim-moi-cua-dao-dien-co-hau-gai-post1141317.html">
                                            <p>Vì sao điện ảnh cần những bộ phim làm lại?</p>
                                        </a>
                                        <p>
                                            Bên cạnh chuyển thể, làm lại các tác phẩm cũ là lựa chọn ưa thích của Hollywood nói riêng và điện ảnh, truyền hình nói chung trong sứ mệnh sản xuất nội</p>
                                    </div>
                                </div>
                                <div className='col-sm-4 col-md-4'>
                                    <div className="d-flex">
                                        <a target="_blank" href="https://zingnews.vn/tai-tu-jeff-bridges-bi-ung-thu-hach-post1143860.html">
                                            <img className="smImg" src="https://znews-photo.zadn.vn/w480/Uploaded/bzwvopcg/2020_10_20/bvu8jj2gt1941.jpg" alt="news" />
                                        </a>
                                        <a target="_blank" href="https://zingnews.vn/tai-tu-jeff-bridges-bi-ung-thu-hach-post1143860.html">
                                            <p>Tài tử Jeff Bridges bị ung thư hạch</p>
                                        </a>
                                    </div>
                                    <div className="d-flex">
                                        <a target="_blank" href="https://zingnews.vn/10-meo-dien-xuat-cua-cac-ngoi-sao-dien-anh-post1140588.html">
                                            <img className="smImg" src="https://znews-photo.zadn.vn/w480/Uploaded/aobovhp/2020_10_11/m6.jpg" alt="news" />
                                        </a>
                                        <a target="_blank" href="https://zingnews.vn/10-meo-dien-xuat-cua-cac-ngoi-sao-dien-anh-post1140588.html">
                                            <p>10 mẹo diễn xuất của các ngôi sao điện ảnh</p>
                                        </a>
                                    </div>
                                    <div className="d-flex">
                                        <a target="_blank" href="https://zingnews.vn/lily-james-bi-che-dien-xuat-vo-hon-trong-phim-moi-post1144537.html">
                                            <img className="smImg" src="https://znews-photo.zadn.vn/w480/Uploaded/neg_yslewlx/2020_10_21/34659802_8863303_image_a_41_1603281202936_2__1.jpg" alt="news" />
                                        </a>
                                        <a target="_blank" href="https://zingnews.vn/lily-james-bi-che-dien-xuat-vo-hon-trong-phim-moi-post1144537.html">
                                            <p>Lily James bị chê diễn xuất vô hồn trong phim mới</p>
                                        </a>
                                    </div>
                                    <div className="d-flex">
                                        <a target="_blank" href="https://zingnews.vn/dylan-o-brien-bi-am-anh-vi-tai-nan-truong-quay-post1143874.html">
                                            <img className="smImg" src="https://znews-photo.zadn.vn/w480/Uploaded/aobovhp/2020_10_20/thomas_1.jpg" alt="news" />
                                        </a>
                                        <a target="_blank" href="https://zingnews.vn/dylan-o-brien-bi-am-anh-vi-tai-nan-truong-quay-post1143874.html">
                                            <p>Dylan O’Brien bị ám ảnh vì tai nạn trường quay</p>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div id='reviews' className=' tab-pane fade' >
                            <div className='row'>
                                <div className='col-sm-6 col-md-6'>
                                    <div>
                                        <div>
                                            <a target='_blank' href="https://ghienreview.com/review-phim-tiec-trang-mau-duong-qua-cang/">
                                                <img src="https://ghienreview.com/wp-content/uploads/2020/10/Ghien-review-Tiec-trang-mau-01-min-900x475.jpg" />
                                            </a>
                                        </div>
                                        <a target='_blank' href="https://ghienreview.com/review-phim-tiec-trang-mau-duong-qua-cang/">
                                            <p>Review phim Tiệc trăng máu: Dương quá căng</p>

                                        </a>
                                        <p> Lý do mà Ghiền review dành ba từ Dương quá căng cho bộ phim mới nhất của đạo diễn Nguyễn Quang Dũng là bởi vì có tình tiết lái máy bay hạng nặng trong phim và phim có nhiều thứ rất “căng”</p>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-md-6'>
                                    <div>
                                        <div>
                                            <a target='_blank' href="https://ghienreview.com/review-phim-sputnik-quai-vat-san-dem-chin-chu-va-dang-xem/">
                                                <img src="https://ghienreview.com/wp-content/uploads/2020/10/Ghien-review-Sputnik-Quai-vat-san-dem-06-1-900x475.jpg" alt="dataImg" />
                                            </a>
                                        </div>
                                        <a target='_blank' href="https://ghienreview.com/review-phim-sputnik-quai-vat-san-dem-chin-chu-va-dang-xem/">
                                            <p>Review phim Sputnik – Quái vật săn đêm: Chỉn chu và đáng xem</p>
                                        </a>
                                        <p>Bộ phim đến từ xứ sở Bạch Dương này được các nhà phê bình đánh giá rất cao nhưng thực sự xem trailer xong thì Ghiền review cảm thấy Sputnik chưa đủ sức hút lắm.</p>
                                    </div>
                                </div>
                                <div className='col-sm-4 col-md-4'>
                                    <div>
                                        <div>
                                            <a target='_blank' href="https://ghienreview.com/review-phim-phi-vu-hoan-luong-xem-de-giai-tri-tot/">
                                                <img src="https://ghienreview.com/wp-content/uploads/2020/10/Ghien-review-Honest-thief-Phi-vu-hoan-luong-06-900x475.jpg" alt="dataImg" />
                                            </a>
                                        </div>
                                        <a target='_blank' href="https://ghienreview.com/review-phim-phi-vu-hoan-luong-xem-de-giai-tri-tot/">
                                            <p>Review phim Phi vụ hoàn lương: Xem để giải trí tốt</p>
                                        </a>
                                        <p>Đây là một bộ phim có kinh phí thấp nhưng kịch bản phim lại được xây dựng rất chuẩn chỉnh và đậm chất giải trí nên cực kỳ phù hợp cho chúng ta ra rạp</p>
                                    </div>
                                </div>
                                <div className='col-sm-4 col-md-4'>
                                    <div>
                                        <div>
                                            <a target='_blank' href="https://ghienreview.com/review-phim-cuc-no-hoa-cuc-cung-de-thuong-va-vietsub-qua-chat/">
                                                <img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_900/https://ghienreview.com/wp-content/uploads/2020/10/Ghien-review-Cuc-no-hoa-cuc-cung-01-900x475.jpg" alt="dataImg" />
                                            </a>
                                        </div>
                                        <a target='_blank' href="https://ghienreview.com/review-phim-cuc-no-hoa-cuc-cung-de-thuong-va-vietsub-qua-chat/">
                                            <p>Review phim Cục nợ hóa Cục cưng: Dễ thương và vietsub quá chất</p>
                                        </a>
                                        <p>Tuần này, khán giả sẽ tiếp tục được chiêu đãi một tác phẩm hài cảm động mang tên Cục nợ hóa Cục cưng với nhiều lời khen về khả năng làm ngập rạp của</p>
                                    </div>
                                </div>
                                <div className='col-sm-4 col-md-4'>
                                    <div className="d-flex">
                                        <a target="_blank" href="hhttps://ghienreview.com/review-phim-upgrade-nang-cap-2018-cau-chuyen-cu-nhung-giai-tri-tot/">
                                            <img className="smImg" src="https://ghienreview.com/wp-content/uploads/2020/10/Ghien-review-Upgrade-Nang-cap-03-900x475.jpg" alt="news" />
                                        </a>
                                        <a target="_blank" href="hhttps://ghienreview.com/review-phim-upgrade-nang-cap-2018-cau-chuyen-cu-nhung-giai-tri-tot/">
                                            <p>Review phim Upgrade – Nâng cấp (2018): Câu chuyện cũ nhưng giải</p>
                                        </a>
                                    </div>
                                    <div className="d-flex">
                                        <a target="_blank" href="https://ghienreview.com/review-phim-an-mang-nuoc-my-gia-dinh-hang-xom/">
                                            <img className="smImg" src="https://ghienreview.com/wp-content/uploads/2020/10/Ghien-review-American-Murder-An-mang-nuoc-My-01-900x475.jpg" alt="news" />
                                        </a>
                                        <a target="_blank" href="https://ghienreview.com/review-phim-an-mang-nuoc-my-gia-dinh-hang-xom/">
                                            <p>Review phim Án mạng nước Mỹ: Gia đình hàng xóm</p>
                                        </a>
                                    </div>
                                    <div className="d-flex">
                                        <a target="_blank" href="https://ghienreview.com/review-phim-the-school-nurse-files-nu-y-ta-can-truong/">
                                            <img className="smImg" src="https://ghienreview.com/wp-content/uploads/2020/10/Ghien-review-The-School-Nurse-Files-02-900x475.jpg" alt="news" />
                                        </a>
                                        <a target="_blank" href="https://ghienreview.com/review-phim-the-school-nurse-files-nu-y-ta-can-truong/">
                                            <p>Review phim The School Nurse Files – Nữ y tá can trường</p>
                                        </a>
                                    </div>
                                    <div className="d-flex">
                                        <a target="_blank" href="https://ghienreview.com/review-phim-rom-tran-trui-chan-that-nhung-khong-hay/">
                                            <img className="smImg" src="https://ghienreview.com/wp-content/uploads/2020/09/Ghien-review-Rom-05-900x475.jpg" alt="news" />
                                        </a>
                                        <a target="_blank" href="https://ghienreview.com/review-phim-rom-tran-trui-chan-that-nhung-khong-hay/">
                                            <p>Review phim Ròm – Trần trụi, chân thật nhưng KHÔNG hay</p>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div id='promotion' className=' tab-pane fade' >
                            <div className='row'>
                                <div className='col-sm-6 col-md-6'>
                                    <div>
                                        <div>
                                            <a target='_blank' href="https://tix.vn/khuyen-mai/7955-tix-1k-ve-ngai-chi-gia-ve">
                                                <img src="https://s3img.vcdn.vn/123phim/2020/10/tix-1k-ve-ngai-chi-gia-ve-16021272027001.png" alt="dataImg" />
                                            </a>
                                        </div>
                                        <a target='_blank' href="https://tix.vn/khuyen-mai/7955-tix-1k-ve-ngai-chi-gia-ve">
                                            <p>TIX 1K/VÉ NGẠI CHI GIÁ VÉ</p>
                                        </a>
                                        <p> Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga</p>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-md-6'>
                                    <div>
                                        <div>
                                            <a target='_blank' href="https://tix.vn/khuyen-mai/7954-dong-gia-1k-ve-khi-mua-ve-qua-tix">
                                                <img src="https://s3img.vcdn.vn/123phim/2020/09/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png" alt="dataImg" />
                                            </a>
                                        </div>
                                        <a target='_blank' href="https://tix.vn/khuyen-mai/7954-dong-gia-1k-ve-khi-mua-ve-qua-tix">
                                            <p>ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX</p>
                                        </a>
                                        <p>ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX. Hành trình tìm Ròm và Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.</p>
                                    </div>
                                </div>
                                <div className='col-sm-4 col-md-4'>
                                    <div>
                                        <div>
                                            <a target='_blank' href="https://tix.vn/khuyen-mai/7919-bhd-star-ve-chi-59-000d-ca-tuan">
                                                <img src="https://s3img.vcdn.vn/123phim/2020/07/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg" alt="dataImg" />
                                            </a>
                                        </div>
                                        <a target='_blank' href="https://tix.vn/khuyen-mai/7919-bhd-star-ve-chi-59-000d-ca-tuan">
                                            <p>BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</p>
                                        </a>
                                        <p>Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.</p>
                                    </div>
                                </div>
                                <div className='col-sm-4 col-md-4'>
                                    <div>
                                        <div>
                                            <a target='_blank' href="https://tix.vn/khuyen-mai/7908-beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon">
                                                <img src="https://s3img.vcdn.vn/123phim/2020/05/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889409277632.png" alt="dataImg" />
                                            </a>
                                        </div>
                                        <a target='_blank' href="https://zingnews.vn/thang-duy-dong-phim-moi-cua-dao-dien-co-hau-gai-post1141317.html">
                                            <p>Beta Cineplex trở lại với hàng loạt ưu đãi lớn</p>
                                        </a>
                                        <p>Từ thứ 7 tuần này (9/5), toàn bộ các rạp Beta Cinemas trên toàn quốc sẽ mở cửa trở lại. Mừng ngày trở lại, hàng loạt khuyến mại KHỦNG đổ bộ</p>
                                    </div>
                                </div>
                                <div className='col-sm-4 col-md-4'>
                                    <div className="d-flex">
                                        <a target="_blank" href="hhttps://tix.vn/khuyen-mai/7806-123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai">
                                            <img className="smImg" src="https://s3img.vcdn.vn/123phim/2019/11/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg" alt="news" />
                                        </a>
                                        <a target="_blank" href="hhttps://tix.vn/khuyen-mai/7806-123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai">
                                            <p>[123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh Trai Yêu</p>
                                        </a>
                                    </div>
                                    <div className="d-flex">
                                        <a target="_blank" href="https://tix.vn/khuyen-mai/7801-123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay">
                                            <img className="smImg" src="https://s3img.vcdn.vn/123phim/2019/11/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg" alt="news" />
                                        </a>
                                        <a target="_blank" href="https://tix.vn/khuyen-mai/7801-123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay">
                                            <p>[123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư</p>
                                        </a>
                                    </div>
                                    <div className="d-flex">
                                        <a target="_blank" href="https://tix.vn/khuyen-mai/7792-mega-gs-mot-doa-hoa-thay-ngan-loi-yeu">
                                            <img className="smImg" src="https://s3img.vcdn.vn/123phim/2019/10/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg" alt="news" />
                                        </a>
                                        <a target="_blank" href="https://tix.vn/khuyen-mai/7792-mega-gs-mot-doa-hoa-thay-ngan-loi-yeu">
                                            <p>[Mega GS] Một đoá hoa thay ngàn lời yêu</p>
                                        </a>
                                    </div>
                                    <div className="d-flex">
                                        <a target="_blank" href="https://tix.vn/khuyen-mai/7790-123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang">
                                            <img className="smImg" src="https://s3img.vcdn.vn/123phim/2019/10/123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang-15712976629297.jpg" alt="news" />
                                        </a>
                                        <a target="_blank" href="https://tix.vn/khuyen-mai/7790-123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang">
                                            <p>[123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc Kim Thang</p>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
