import {
    FaQuoteLeft,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import testimonial from "../../assets/img/team-1.jpg";
import jyotishkhanna from "../../assets/img/testimonial/jyotishkhanna.jpeg";
import amandipsingh01 from "../../assets/img/testimonial/amandipsingh01.jpeg";
import usama from "../../assets/img/testimonial/usama.jpg";
const Testimonial = () => {
    const testimonials = [
        {
            name: 'Amandeep Singh',
            image: amandipsingh01,
            description: "Our experience with Book Your Own's Laravel development team surpassed our expectations. Highly recommended for their expertise and dedication",
            commentBY: "Founder & CEO at BOOKYOUROWN",
        },
        {
            name: 'Jyotish Khanna',
            image: jyotishkhanna,
            description: "We couldn't be happier with SmartO Systems' Laravel services. Their team's proficiency and commitment truly set them apart. We enthusiastically endorse their expertise. Your success is our priority.",
            commentBY: "Founder & CEO at SmartO Systems",
        },
        {
            name: 'Muhammad Usama',
            image: usama,
            description: "Suraj Kumar transformed our point-of-sale operations with his expertise and dedication, ensuring seamless transactions and enhanced customer satisfaction",
            commentBY: "Freelancer",
        },
    ];
    return (
        <section className="section testimonial-section border-top-g">
            <div className="container">
                <div className="row section-heading-02">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3><span>My Testimonial</span></h3>
                            <p>Full Stack & MERN Stack Developer based in <strong>INDIA</strong>.</p>
                        </div>
                    </div>
                </div>
                <Swiper
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
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
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="feature-box-03">
                                    <div className="feature-img">
                                        <img src={testimonial.image} title="" alt="" />
                                    </div>
                                    <div className="feature-content">
                                        <div className="icons">
                                            {/* <i className="fas fa-quote-left"></i> */}
                                            <FaQuoteLeft />
                                        </div>
                                        <p>{testimonial.description}</p>
                                        <h6>{testimonial.name}</h6>
                                        <span>{testimonial.commentBY}</span>
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

export default Testimonial