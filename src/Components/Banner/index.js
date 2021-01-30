// import React from 'react'
// import './banner.css'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import BannerItem1 from '../../assets/images/banner-item-01.jpg'
// import BannerItem2 from '../../assets/images/banner-item-02.jpg'
// import BannerItem3 from '../../assets/images/banner-item-03.jpg'
// import BannerItem4 from '../../assets/images/banner-item-04.jpg'
// import BannerItem5 from '../../assets/images/banner-item-05.jpg'
// import BannerItem6 from '../../assets/images/banner-item-06.jpg'

// export default function Banner() {
//     return (
//         <div className="main-banner header-text">
//             <div className="container-fluid">
//                 <div className="owl-banner owl-carousel">
//                     <OwlCarousel className='owl-theme' loop margin={10} nav>
//                         <div className="item">
//                             <img src={BannerItem1} alt="" />
//                             <div className="item-content">
//                                 <div className="main-content">
//                                     <div className="meta-category">
//                                         <span>Fashion</span>
//                                     </div>
//                                     <a href="post-details.html">
//                                         <h4>Morbi dapibus condimentum</h4>
//                                     </a>
//                                     <ul className="post-info">
//                                         <li><a href="javascript">Admin</a></li>
//                                         <li><a href="javascript">May 12, 2020</a></li>
//                                         <li><a href="javascript">12 Comments</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="item">
//                             <img src={BannerItem2} alt="" />
//                             <div className="item-content">
//                                 <div className="main-content">
//                                     <div className="meta-category">
//                                         <span>Nature</span>
//                                     </div>
//                                     <a href="post-details.html">
//                                         <h4>Donec porttitor augue at velit</h4>
//                                     </a>
//                                     <ul className="post-info">
//                                         <li><a href="javascript">Admin</a></li>
//                                         <li><a href="javascript">May 14, 2020</a></li>
//                                         <li><a href="javascript">24 Comments</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="item">
//                             <img src={BannerItem3} alt="" />
//                             <div className="item-content">
//                                 <div className="main-content">
//                                     <div className="meta-category">
//                                         <span>Lifestyle</span>
//                                     </div>
//                                     <a href="post-details.html">
//                                         <h4>Best HTML Templates on TemplateMo</h4>
//                                     </a>
//                                     <ul className="post-info">
//                                         <li><a href="javascript">Admin</a></li>
//                                         <li><a href="javascript">May 16, 2020</a></li>
//                                         <li><a href="javascript">36 Comments</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="item">
//                             <img src={BannerItem4} alt="" />
//                             <div className="item-content">
//                                 <div className="main-content">
//                                     <div className="meta-category">
//                                         <span>Fashion</span>
//                                     </div>
//                                     <a href="post-details.html">
//                                         <h4>Responsive and Mobile Ready Layouts</h4>
//                                     </a>
//                                     <ul className="post-info">
//                                         <li><a href="javascript">Admin</a></li>
//                                         <li><a href="javascript">May 18, 2020</a></li>
//                                         <li><a href="javascript">48 Comments</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="item">
//                             <img src={BannerItem5} alt="" />
//                             <div className="item-content">
//                                 <div className="main-content">
//                                     <div className="meta-category">
//                                         <span>Nature</span>
//                                     </div>
//                                     <a href="post-details.html">
//                                         <h4>Cras congue sed augue id ullamcorper</h4>
//                                     </a>
//                                     <ul className="post-info">
//                                         <li><a href="javascript">Admin</a></li>
//                                         <li><a href="javascript">May 24, 2020</a></li>
//                                         <li><a href="javascript">64 Comments</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="item">
//                             <img src={BannerItem6} alt="" />
//                             <div className="item-content">
//                                 <div className="main-content">
//                                     <div className="meta-category">
//                                         <span>Lifestyle</span>
//                                     </div>
//                                     <a href="post-details.html">
//                                         <h4>Suspendisse nec aliquet ligula</h4>
//                                     </a>
//                                     <ul className="post-info">
//                                         <li><a href="javascript">Admin</a></li>
//                                         <li><a href="javascript">May 26, 2020</a></li>
//                                         <li><a href="javascript">72 Comments</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </OwlCarousel>
//                 </div>
//             </div>
//         </div>
//     )
// }

import React from 'react'
import OwlCarousel from "react-owl-carousel";
import './banner.css'
import '../../assets/css/owl.css'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BannerItem1 from '../../assets/images/banner-item-01.jpg'
import BannerItem2 from '../../assets/images/banner-item-02.jpg'
import BannerItem3 from '../../assets/images/banner-item-03.jpg'
import BannerItem4 from '../../assets/images/banner-item-04.jpg'
import BannerItem5 from '../../assets/images/banner-item-05.jpg'
import BannerItem6 from '../../assets/images/banner-item-06.jpg'

export default function Banner() {
    const state = {
        responsive: {
            0: {
                items: 1
            },
            1050: {
                items: 3
            }
        }
    };
    return (
        <div className="main-banner header-text">
            <div className="container-fluid">
                <div className="owl-banner owl-carousel">
                    <OwlCarousel
                        items={3}
                        className="owl-theme"
                        loop={true}
                        nav={true}
                        margin={10}
                        dots={false}
                        items={3}
                        responsive={state.responsive}
                    >
                        <div className="item">
                            <img className="img" alt="" src={BannerItem1} />
                            <div className="item-content">
                                <div className="main-content">
                                    <div className="meta-category">
                                        <span>Fashion</span>
                                    </div>
                                    <a href="javascript">
                                        <h4>Morbi dapibus condimentum</h4>
                                    </a>
                                    <ul className="post-info">
                                        <li>
                                            <a href="javacript">Admin</a>
                                            <a href="javacript">May 12, 2020</a>
                                            <a href="javacript">12 Comments</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img className="img" alt="" src={BannerItem2} />
                            <div className="item-content">
                                <div className="main-content">
                                    <div className="meta-category">
                                        <span>Fashion</span>
                                    </div>
                                    <a href="javascript">
                                        <h4>Morbi dapibus condimentum</h4>
                                    </a>
                                    <ul className="post-info">
                                        <li>
                                            <a href="javacript">Admin</a>
                                            <a href="javacript">May 12, 2020</a>
                                            <a href="javacript">12 Comments</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img className="img" alt="" src={BannerItem3} />
                            <div className="item-content">
                                <div className="main-content">
                                    <div className="meta-category">
                                        <span>Fashion</span>
                                    </div>
                                    <a href="javascript">
                                        <h4>Morbi dapibus condimentum</h4>
                                    </a>
                                    <ul className="post-info">
                                        <li>
                                            <a href="javacript">Admin</a>
                                            <a href="javacript">May 12, 2020</a>
                                            <a href="javacript">12 Comments</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img className="img" alt="" src={BannerItem4} />
                            <div className="item-content">
                                <div className="main-content">
                                    <div className="meta-category">
                                        <span>Fashion</span>
                                    </div>
                                    <a href="javascript">
                                        <h4>Morbi dapibus condimentum</h4>
                                    </a>
                                    <ul className="post-info">
                                        <li>
                                            <a href="javacript">Admin</a>
                                            <a href="javacript">May 12, 2020</a>
                                            <a href="javacript">12 Comments</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img className="img" alt="" src={BannerItem5} />
                            <div className="item-content">
                                <div className="main-content">
                                    <div className="meta-category">
                                        <span>Fashion</span>
                                    </div>
                                    <a href="javascript">
                                        <h4>Morbi dapibus condimentum</h4>
                                    </a>
                                    <ul className="post-info">
                                        <li>
                                            <a href="javacript">Admin</a>
                                            <a href="javacript">May 12, 2020</a>
                                            <a href="javacript">12 Comments</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img className="img" alt="" src={BannerItem6} />
                            <div className="item-content">
                                <div className="main-content">
                                    <div className="meta-category">
                                        <span>Fashion</span>
                                    </div>
                                    <a href="javascript">
                                        <h4>Morbi dapibus condimentum</h4>
                                    </a>
                                    <ul className="post-info">
                                        <li><a href="javacript">Admin</a></li>
                                        <li><a href="javascript">May 12, 2020</a></li>
                                        <li><a href="javascript">12 Comments</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}