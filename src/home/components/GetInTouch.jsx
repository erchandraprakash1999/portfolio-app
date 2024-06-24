import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdMail } from "react-icons/md";
import ContactForm from "./ContactForm";
const GetInTouch = ({sectionsRefs}) => {
    return (
        <>
            <section ref={(el) => (sectionsRefs.current[4] = el)} data-scroll-index="4" className="section contactus-section border-top-g">
                <div className="container">
                    <div className="row section-heading-02">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h3><span>Get in touch</span></h3>
                                <p>I am available 24/7. Get in touch!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-xl-8">
                            <ContactForm />
                        </div>
                        <div className="col-lg-5 col-xl-4">
                            <div className="contact-name-01">
                                <div className="icon">
                                    <MdLocationOn />
                                </div>
                                <div className="ps-3">
                                    <h6>Address</h6>
                                    <p>Lucknow Uttar Pradesh <br />INDIA</p>
                                </div>
                            </div>
                            <div className="contact-name-01">
                                <div className="icon">
                                    <MdMail />
                                </div>
                                <div className="ps-3">
                                    <h6>mail</h6>
                                    <p>er.surajkumar1999@gmail.com<br /> 24/7, Monday to Sunday</p>
                                </div>
                            </div>
                            <div className="contact-name-01">
                                <div className="icon">
                                    <FaPhoneAlt />
                                </div>
                                <div className="ps-3">
                                    <h6>Phone</h6>
                                    <p>Phone: +91 870 7673 327<br />Phone: +91 870 7673 327</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="google-map">
                                <div className="ratio ratio-21x9">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d703.7292203434553!2d80.90878403548957!3d26.790856599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfc0626e3e7eb%3A0xd64e3d8a0dce9166!2sE-3%2F163%2C%20Sector%20H%2C%20LDA%20Colony%2C%20Lucknow%2C%20Uttar%20Pradesh%20226012!5e1!3m2!1sen!2sin!4v1713031510006!5m2!1sen!2sin" width="600" height="450" style={{ "border": "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    {/* <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1520156366883" allowFullScreen=""></iframe> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="right-effects"></div>
            <div className="left-effects"></div>
        </>
    )
}

export default GetInTouch
