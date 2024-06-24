import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import html from "../../assets/img/technologies/html.png";
import css from "../../assets/img/technologies/css.png";
import bootstrap from "../../assets/img/technologies/bootstrap.png";
import jquery from "../../assets/img/technologies/jquery.png";
import js from "../../assets/img/technologies/js.jpg";
import php from "../../assets/img/technologies/php.png";
import codeigniter from "../../assets/img/technologies/codeigniter.png";
import laravel from "../../assets/img/technologies/laravel.png";
import reactjs from "../../assets/img/technologies/reactjs.jpg";
import reduxjs from "../../assets/img/technologies/reduxjs.png";
import nextjs from "../../assets/img/technologies/nextjs.png";
import nodejs from "../../assets/img/technologies/nodejs.jpg";
import expressjs from "../../assets/img/technologies/express-js.jpg";
import mongodb from "../../assets/img/technologies/mongodb.png";
import github from "../../assets/img/technologies/github.png";
import stripe from "../../assets/img/technologies/stripe.png";
import paypal from "../../assets/img/technologies/paypal.png";
import razorpay from "../../assets/img/technologies/razorpay.png";

const Technologies = () => {
    const technologies = [
        {
            image: html,
            title: 'HTML',
        },
        {
            image: css,
            title: 'CSS',
        },
        {
            image: bootstrap,
            title: 'Bootstrap ',
        },
        {
            image: jquery,
            title: 'Jquery',
        },
        {
            image: js,
            title: 'Javascript',
        },
        {
            image: php,
            title: 'PHP',
        },
        {
            image: codeigniter,
            title: 'Codeigniter-3',
        },
        {
            image: laravel,
            title: 'Laravel',
        },
        {
            image: html,
            title: 'SQL & MY SQL',
        },
        {
            image: reactjs,
            title: 'React JS',
        },
        {
            image: reduxjs,
            title: 'Redux',
        },
        {
            image: nextjs,
            title: 'Next JS',
        },
        {
            image: nodejs,
            title: 'Node JS',
        },
        {
            image: expressjs,
            title: 'Express JS',
        },
        {
            image: mongodb,
            title: 'MongoDB',
        },
        {
            image: github,
            title: 'GitHub',
        },
        {
            image: stripe,
            title: 'Stripe',
        },
        {
            image: paypal,
            title: 'Paypal',
        },
        {
            image: razorpay,
            title: 'Razorpay',
        },

    ];
    return (
        <section className="section testimonial-section border-top-g">
            <div className="container">
                <div className="row section-heading-02">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3><span>Technologies</span></h3>
                            <p>Transforming conceptual ideas into touchable realities</p>
                        </div>
                    </div>
                </div>
                <Swiper
                    loop={true}
                    modules={[Autoplay, Navigation]}
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 25,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        technologies.map((technology, index) => (
                            <SwiperSlide key={index}>

                                <div className="work-box mb-4">
                                    <div className="work-img">
                                        <a className="gallery-link" href="assets/img/work-2.jpg">
                                            <img src={technology.image} title="" alt="" />
                                        </a>
                                    </div>
                                    <div className="work-info">
                                        <div className="btn-bar">
                                            <a className="link-effect gallery-link" href="assets/img/work-2.jpg">{technology.title} <i className="bi bi-arrow-up-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>


            </div>
        </section>
    )
}

export default Technologies