import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import testimonial from "../../assets/img/work-1.jpg";
import smarto from "../../assets/img/portfolio/smarto.png";
import smartosystems from "../../assets/img/portfolio/smartosystems.png";
import byo from "../../assets/img/portfolio/byo.png";
import cabBooking from "../../assets/img/portfolio/cab-booking.png";
import holidayPackages from "../../assets/img/portfolio/holiday-packages.png";
import orangemoonsss from "../../assets/img/portfolio/orangemoonsss.png";
import extranet from "../../assets/img/portfolio/extranet.png";
import air_app from "../../assets/img/portfolio/air-app.png";
import byo_admin from "../../assets/img/portfolio/byo-admin.png";
import ytl from "../../assets/img/portfolio/ytl.png";
import pos from "../../assets/img/portfolio/pos.png";


const Portfolio = ({ sectionsRefs }) => {
    // const projects = [
    //     {
    //         title: 'Find a Training Center. India',
    //         name: 'SmartO One',
    //         image: smartosystems,
    //         description: 'SmartO One is a largest computer education network across India. It is also a unique platform where students can find SmartO Systems Institute near to their location. This includes the Student Management Panel, Free record management, Wallet, and other facilities which require for a proper Institute Management. It offers online courses, examination, certification and other services for students. ',
    //         status: true,
    //         link: 'https://smartosystems.in/'
    //     },
    //     {
    //         title: 'Find The Best Budget Hotels In India',
    //         name: 'Book Your Own',
    //         image: byo,
    //         description: 'Book Your Own take pride in telling our customers that We are among the best online booking Platform in India. We have years of experience and services in the hotel and cab industry in India have helped us become the favourite online travel brand. Our selected hotels are close to tourist places, business hubs and shopping centers. Our Team self-analyzed all the hotels to make sure our customers feel comfortable while booking the hotel.',
    //         status: true,
    //         link: 'https://www.bookyourown.net'
    //     },
    //     {
    //         title: 'A Leading Visual Training Provider',
    //         name: 'SmartO Systems',
    //         image: smarto,
    //         description: 'SmartO Systems is a leading visual training provider related to all kind of consumer education courses. It provides online e-learning courses which includes basic computer course, web development course, graphic designing course etc. Students and professionals can download these online e learning courses to improve their skills and knowledge.There are many SmartO Systems center near you associated with SmartO One.',
    //         status: true,
    //         link: 'https://smarto.one'
    //     },
    //     {
    //         title: 'Find best Deal on online cab booking in India',
    //         name: 'Book Your Own',
    //         image: cabBooking,
    //         description: 'Book Your Own take pride in telling our customers that We are among the best online booking Platform in India. We have years of experience and services in the hotel and cab industry in India have helped us become the favourite online travel brand. Our selected hotels are close to tourist places, business hubs and shopping centers. Our Team self-analyzed all the hotels to make sure our customers feel comfortable while booking the hotel.',
    //         status: true,
    //         link: 'https://www.bookyourown.net/cab-booking'
    //     },
    //     {
    //         title: 'Book Holiday Tour Packages',
    //         name: 'Book Your Own',
    //         image: holidayPackages,
    //         description: 'Book Your Own take pride in telling our customers that We are among the best online booking Platform in India. We have years of experience and services in the hotel and cab industry in India have helped us become the favourite online travel brand. Our selected hotels are close to tourist places, business hubs and shopping centers. Our Team self-analyzed all the hotels to make sure our customers feel comfortable while booking the hotel.',
    //         status: true,
    //         link: 'https://www.bookyourown.net/holiday-packages'
    //     },
    //     {
    //         title: 'Orange Moon Student Safety Services',
    //         name: 'Orange Moon SSS',
    //         image: orangemoonsss,
    //         description: 'A premier student safety service, providing overnight "night chaperone" supervision and other student event supervision.Service is generally provided at:hotel lodging.student dances and sleepovers. day cruises(boating).and many other student activities. “Expect us to be fair, honest, generous, kind and all those things are good according to ethical tradition, because we operate by the golden rule.”',
    //         status: true,
    //         link: 'https://orangemoonsss.com/'
    //     },
    //     {
    //         title: 'Hotel Extranet System',
    //         name: 'Hotel Extranet System',
    //         image: extranet,
    //         description: 'Hotel Extranet is an online system that allows travel agents and hoteliers to upload their real-time hotel inventory or their partner or suppliers hotel inventory and provides them access to update all hotel information such as room availability, pricing, and other data to manage online inventory and reservations in a faster and easier way.',
    //         status: true,
    //         link: 'https://extranet.socialsketcher.com/'
    //     },
    //     {
    //         title: 'AIR Networking Management App',
    //         name: 'AIR App Mobile, Your Networking Management App',
    //         image: air_app,
    //         description: "Air App Mobiles idea of a Digital Business Card is just that..... digital. You don't need NFC chips that are hit or miss. You don't need plastic cards or necklaces that you're going to lose. You have your QR Code and you have your phone. And let's be honest, you'll forget your car before you forget your phone.",
    //         status: true,
    //         link: 'https://airapponline.com/'
    //     },
    //     {
    //         title: 'Manage Book Your Own App',
    //         name: 'Book Your Own Admin',
    //         image: byo_admin,
    //         description: "Air App Mobiles idea of a Digital Business Card is just that..... digital. You don't need NFC chips that are hit or miss. You don't need plastic cards or necklaces that you're going to lose. You have your QR Code and you have your phone. And let's be honest, you'll forget your car before you forget your phone.",
    //         status: true,
    //         link: 'https://www.bookyourown.net/admin'
    //     },
    //     {
    //         title: 'POS Billing and Stock Management System',
    //         name: 'Point of Sale',
    //         image: pos,
    //         description: "POS Billing and Stock Management System is advanced billing software and stock management tool, which comes with invoicing and long with advanced features like Taxes, Inventory, Addons, product variations, warehouse, branches, multi stores, brands and categories, advance reports, barcodes, thermal printer different sizes support, multilingual and multi currency support etc. It can be used for different niches like mobile stores, apparel stores etc where you want to manage the stock with multiple branches.",
    //         status: false,
    //         link: 'https://www.yes.my/'
    //     },
    //     {
    //         title: 'YTL Communications',
    //         name: 'Yes | First to 5G',
    //         image: ytl,
    //         description: "YTL Communications has kept pushing the boundaries of innovation in communications technology.The company is committed in supporting the National Broadband Initiative to bridge the digital divide between the urban and rural communities, improving the quality of life, and supporting efforts to promote technological innovation",
    //         status: true,
    //         link: 'https://www.yes.my/'
    //     }

    // ]
    const projects = [
        {
            title: 'Find a Training Center. India',
            name: 'SmartO One',
            image: smartosystems,
            description: "Im utilizing HTML, CSS, JavaScript, jQuery, PHP, and CodeIgniter-3 for this project. From crafting responsive designs to building dynamic web applications, I aim to showcase my proficiency in these key technologies. Additionally, I've incorporated an admin panel to manage all sections dynamically, enhancing the project's functionality and user experience.",
            status: true,
            link: 'https://smartosystems.in/'
        },
        {
            title: 'Find The Best Budget Hotels In India',
            name: 'Book Your Own',
            image: byo,
            description: 'Book Your Own is a top-tier online booking platform in India, renowned for its exceptional services in the hotel and cab industry. Our meticulously chosen hotels are conveniently located near popular destinations, while our team ensures utmost comfort for our customers. Leveraging HTML, CSS, JavaScript, jQuery, PHP, Laravel, and Vue.js, we offer seamless booking experiences, setting a new standard in online travel',
            status: true,
            link: 'https://www.bookyourown.net'
        },
        {
            title: 'A Leading Visual Training Provider',
            name: 'SmartO Systems',
            image: smarto,
            description: 'SmartO Systems is a leading visual training provider related to all kind of consumer education courses. It provides online e-learning courses which includes basic computer course, web development course, graphic designing course etc. Students and professionals can download these online e learning courses to improve their skills and knowledge.There are many SmartO Systems center near you associated with SmartO One.',
            status: true,
            link: 'https://smarto.one'
        },
        {
            title: 'Find best Deal on online cab booking in India',
            name: 'Book Your Own',
            image: cabBooking,
            description: 'Book Your Own take pride in telling our customers that We are among the best online booking Platform in India. We have years of experience and services in the hotel and cab industry in India have helped us become the favourite online travel brand. Our selected hotels are close to tourist places, business hubs and shopping centers. Our Team self-analyzed all the hotels to make sure our customers feel comfortable while booking the hotel. Leveraging HTML, CSS, JavaScript, jQuery, PHP, Laravel, and Vue.js, we offer seamless booking experiences, setting a new standard in online travel',
            status: true,
            link: 'https://www.bookyourown.net/cab-booking'
        },
        {
            title: 'Book Holiday Tour Packages',
            name: 'Book Your Own',
            image: holidayPackages,
            description: 'Book Your Own take pride in telling our customers that We are among the best online booking Platform in India. We have years of experience and services in the hotel and cab industry in India have helped us become the favourite online travel brand. Our selected hotels are close to tourist places, business hubs and shopping centers. Our Team self-analyzed all the hotels to make sure our customers feel comfortable while booking the hotel. Leveraging HTML, CSS, JavaScript, jQuery, PHP, Laravel, and Vue.js, we offer seamless booking experiences, setting a new standard in online travel',
            status: true,
            link: 'https://www.bookyourown.net/holiday-packages'
        },
        {
            title: 'Orange Moon Student Safety Services',
            name: 'Orange Moon SSS',
            image: orangemoonsss,
            description: 'A premier student safety service, providing overnight "night chaperone" supervision and other student event supervision.Service is generally provided at:hotel lodging.student dances and sleepovers. day cruises(boating).and many other student activities. “Expect us to be fair, honest, generous, kind and all those things are good according to ethical tradition, because we operate by the golden rule.”',
            status: true,
            link: 'https://orangemoonsss.com/'
        },
        {
            title: 'Hotel Extranet System',
            name: 'Hotel Extranet System',
            image: extranet,
            description: 'Hotel Extranet is an online system that allows travel agents and hoteliers to upload their real-time hotel inventory or their partner or suppliers hotel inventory and provides them access to update all hotel information such as room availability, pricing, and other data to manage online inventory and reservations in a faster and easier way.',
            status: true,
            link: 'https://extranet.socialsketcher.com/'
        },
        {
            title: 'AIR Networking Management App',
            name: 'AIR App Mobile, Your Networking Management App',
            image: air_app,
            description: "Air App Mobiles idea of a Digital Business Card is just that..... digital. You don't need NFC chips that are hit or miss. You don't need plastic cards or necklaces that you're going to lose. You have your QR Code and you have your phone. And let's be honest, you'll forget your car before you forget your phone.",
            status: true,
            link: 'https://airapponline.com/'
        },
        {
            title: 'Manage Book Your Own App',
            name: 'Book Your Own Admin',
            image: byo_admin,
            description: "Air App Mobiles idea of a Digital Business Card is just that..... digital. You don't need NFC chips that are hit or miss. You don't need plastic cards or necklaces that you're going to lose. You have your QR Code and you have your phone. And let's be honest, you'll forget your car before you forget your phone.",
            status: true,
            link: 'https://www.bookyourown.net/admin'
        },
        {
            title: 'POS Billing and Stock Management System',
            name: 'Point of Sale',
            image: pos,
            description: "POS Billing and Stock Management System is advanced billing software and stock management tool, which comes with invoicing and long with advanced features like Taxes, Inventory, Addons, product variations, warehouse, branches, multi stores, brands and categories, advance reports, barcodes, thermal printer different sizes support, multilingual and multi currency support etc. It can be used for different niches like mobile stores, apparel stores etc where you want to manage the stock with multiple branches.",
            status: false,
            link: 'https://www.yes.my/'
        },
        {
            title: 'YTL Communications',
            name: 'Yes | First to 5G',
            image: ytl,
            description: "YTL Communications has kept pushing the boundaries of innovation in communications technology.The company is committed in supporting the National Broadband Initiative to bridge the digital divide between the urban and rural communities, improving the quality of life, and supporting efforts to promote technological innovation",
            status: true,
            link: 'https://www.yes.my/'
        }

    ]
    return (
        <section ref={(el) => (sectionsRefs.current[3] = el)} data-scroll-index="3" className="section work-section border-top-g">
            <div className="container">
                <div className="row section-heading-02">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3><span>My Portfolio</span></h3>
                            <p>Full Stack & MERN Stack Developer based in <strong>INDIA</strong>.</p>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel lightbox-gallery" data-items="3" data-nav-dots="true" data-md-items="3" data-sm-items="2" data-xs-items="2" data-xx-items="1" data-space="30" data-autoplay="true">
                    <Swiper
                        loop={true}
                        modules={[Autoplay, Navigation]}
                        slidesPerView={1}
                        spaceBetween={10}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        // }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                            },
                        }}
                        className="mySwiper"
                    >
                        {
                            projects.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <div className="work-box mb-4">
                                        <div className="work-img">
                                            <a className="gallery-link" target='_blank' href={project.image}>
                                                <img src={project.image} title="" alt="" />
                                            </a>
                                        </div>
                                        <div className="work-info">
                                            <div className="meta">
                                                <span className="text-theme">{project.title}</span>
                                            </div>
                                            <h5>{project.name}</h5>
                                            <p>{project.description}</p>
                                            {
                                                project.status && (
                                                    <div className="btn-bar">
                                                        <a className="link-effect gallery-link" target='_blank' href={project.link}>View Project <i className="bi bi-arrow-up-right"></i></a>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Portfolio