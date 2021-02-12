import React from 'react'
import OwlCarousel from "react-owl-carousel";
import './banner.css'
import '../../assets/css/owl.css'
import { Link } from 'react-router-dom'
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
                        responsive={state.responsive}
                    >
                        <div className="item">
                            <img className="img" alt="" src={BannerItem1} />
                            <div className="item-content">
                                <div className="main-content">
                                    <div className="meta-category">
                                        <span>Fashion</span>
                                    </div>
                                    <Link to="javascript">
                                        <h4>Morbi dapibus condimentum</h4>
                                    </Link>
                                    <ul className="post-info">
                                        <li><Link to="javascript">Admin</Link></li>
                                        <li><Link to="javascript"> May 12, 2020</Link></li>
                                        <li><Link to="javascript"> 12 Comments</Link></li>
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
                                    <Link to="javascript">
                                        <h4>Morbi dapibus condimentum</h4>
                                    </Link>
                                    <ul className="post-info">
                                        <li><Link to="javascript">Admin</Link></li>
                                        <li><Link to="javascript"> May 12, 2020</Link></li>
                                        <li><Link to="javascript"> 12 Comments</Link></li>
                                    </ul >
                                </div >
                            </div >
                        </div >
                        <div className="item">
                            <img className="img" alt="" src={BannerItem3} />
                            <div className="item-content">
                                <div className="main-content">
                                    <div className="meta-category">
                                        <span>Fashion</span>
                                    </div>
                                    <Link to="javascript">
                                        <h4>Morbi dapibus condimentum</h4>
                                    </Link>
                                    <ul className="post-info">
                                        <li><Link to="javascript">Admin</Link></li>
                                        <li><Link to="javascript"> May 12, 2020</Link></li>
                                        <li><Link to="javascript"> 12 Comments</Link></li>
                                    </ul >
                                </div >
                            </div >
                        </div >
                        <div className="item">
                            <img className="img" alt="" src={BannerItem4} />
                            <div className="item-content">
                                <div className="main-content">
                                    <div className="meta-category">
                                        <span>Fashion</span>
                                    </div>
                                    <Link to="javascript">
                                        <h4>Morbi dapibus condimentum</h4>
                                    </Link>
                                    <ul className="post-info">
                                        <li><Link to="javascript">Admin</Link></li>
                                        <li><Link to="javascript"> May 12, 2020</Link></li>
                                        <li><Link to="javascript"> 12 Comments</Link></li>
                                    </ul >
                                </div >
                            </div >
                        </div >
                        <div className="item">
                            <img className="img" alt="" src={BannerItem5} />
                            <div className="item-content">
                                <div className="main-content">
                                    <div className="meta-category">
                                        <span>Fashion</span>
                                    </div>
                                    <Link to="javascript">
                                        <h4>Morbi dapibus condimentum</h4>
                                    </Link>
                                    <ul className="post-info">
                                        <li><Link to="javascript">Admin</Link></li>
                                        <li><Link to="javascript"> May 12, 2020</Link></li>
                                        <li><Link to="javascript"> 12 Comments</Link></li>
                                    </ul >
                                </div >
                            </div >
                        </div >
                        <div className="item">
                            <img className="img" alt="" src={BannerItem6} />
                            <div className="item-content">
                                <div className="main-content">
                                    <div className="meta-category">
                                        <span>Fashion</span>
                                    </div>
                                    <Link to="javascript">
                                        <h4>Morbi dapibus condimentum</h4>
                                    </Link>
                                    <ul className="post-info">
                                        <li><Link to="javascript">Admin</Link></li>
                                        <li><Link to="javascript"> May 12, 2020</Link></li>
                                        <li><Link to="javascript"> 12 Comments</Link></li>
                                    </ul >
                                </div >
                            </div >
                        </div >
                    </OwlCarousel >
                </div >
            </div >
        </div >
    )
}