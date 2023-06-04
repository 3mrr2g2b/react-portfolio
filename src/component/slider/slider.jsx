import avatar from "../../images/images.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Pagination } from "swiper";
import { useState, useEffect } from "react";
import PageLoader from "../load_skelton/skelton";
// import images of swiper Slider
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";

// swiper css
import "swiper/css";
import "swiper/css/pagination";
// Install Swiper components
SwiperCore.use([Navigation, Pagination]);

const Slider = () => {
    const array = [
        {
            title:'Portfolio',
            image: img1,
            link_github: "",
            preview: "",
        },
        {
            title:'Company project',
            image: img2,
            link_github: "",
            preview: "",
        },
        {
            title:'Anime website',
            image: img3,
            link_github: "",
            preview: "",
        },
    ];
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <>
            {isLoading ? (
                <PageLoader />
            ) : (
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    
                    pagination={{ clickable: true }}
                    pagination={{ dynamicBullets: true }}
                    loop
                    className="swiper"
                >
                    {array.map((e, k) => (
                        <SwiperSlide className="slide">
                            <div className="box card main" key={k}>
                                <div className="container">
                                    <div className="content">
                                        <div className="overly"></div>
                                        <img src={e.image} />
                                        <div className="group-slide">
                                            <h3 className='title'>{e.title}</h3>
                                        <div className="group-link">
                                            <a className='linkaya' href={e.link_github}>
                                                <i class="fab fa-github"></i>
                                            </a>
                                            <a className='linkaya' href={e.preview}>
                                                <i class="fas fa-chalkboard"></i>
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </>
    );
};

export default Slider;
