import React, { useContext } from 'react'
import OwlCarousel from "react-owl-carousel";
import BlogContext from '../../Contexts/BlogContext/BlogContext'
import './banner.css'
import BannerItem from '../BannerItem/BannerItem'
import '../../assets/css/owl.css'

export default function Banner() {
    const { articles } = useContext(BlogContext);
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
                        {
                            articles && articles.map(article => {
                                return (
                                    < BannerItem key={article._id} title={article.title} description={article.description} createAt={article.createAt} user={article.user} />
                                )
                            }
                            )
                        }

                    </OwlCarousel >
                </div >
            </div >
        </div >
    )
}