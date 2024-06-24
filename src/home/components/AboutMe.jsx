import {
    FaFacebook, FaGithub, FaInstagram, FaLinkedinIn,
    FaSkype, FaTwitter
} from "react-icons/fa";
import profileImage from "../../assets/img/profile/profile-image.jpg";
const AboutMe = ({ sectionsRefs }) => {
    return (
        <section ref={(el) => (sectionsRefs.current[1] = el)} className="section about-section-02 border-top-g">
            <div className="container">
                <div className="row section-heading-02">
                    <div className="col-lg-6">
                        <h3><span>About Me</span></h3>
                        <p>Full Stack & MERN Stack Developer based in <strong>INDIA</strong>.</p>
                    </div>
                </div>
                <div className="row align-items-center gy-4">
                    <div className="col-lg-6">
                        <div className="about-me-img">
                            <img src={profileImage} title="" alt="" />
                            <div className="nav social-icon">
                                <a href="https://www.facebook.com/profile.php?id=61551472067645" target="_blank"><FaFacebook /></a>
                                <a href="https://twitter.com/surajkumar1999_" target="_blank"><FaTwitter /></a>
                                <a href="https://www.instagram.com/er.surajkumar1999_" target="_blank"><FaInstagram /></a>
                                <a href="https://www.linkedin.com/in/er-suraj-kumar-69882a292" target="_blank"><FaLinkedinIn /></a>
                                <a href="https://join.skype.com/invite/u1meLHjiUpMe" target="_blank"><FaSkype /></a>
                                <a href="https://github.com/ersurajkumar1999" target="_blank"><FaGithub /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-me ps-lg-5">
                            <h4>I AM Suraj Kumar</h4>
                            <h6>A Lead <span className="text-theme">Full Stack &amp; Mern Stack</span> Developer based in <span className="text-theme">INDIA</span></h6>
                            <p>As a Creative Software Developer, I combine my technical expertise with a deep understanding of design principles to create engaging digital solutions. My services include:</p>
                            <div className="row about-list">
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>Birthday</label>
                                        <p>10th august 1999</p>
                                    </div>
                                    <div className="media">
                                        <label>Age</label>
                                        <p>25 Yr</p>
                                    </div>
                                    <div className="media">
                                        <label>Residence</label>
                                        <p>INDIA</p>
                                    </div>
                                    <div className="media">
                                        <label>Address</label>
                                        <p>Lucknow Uttar Pradesh, INDIA</p>
                                    </div>
                                    <div className="media">
                                        <label>Freelance</label>
                                        <p>Available</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>E-mail</label>
                                        <p>er.surajkumar1999@gmail.com</p>
                                    </div>
                                    <div className="media">
                                        <label>Phone</label>
                                        <p>+91 870 7673 327</p>
                                    </div>
                                    <div className="media">
                                        <label>Skype</label>
                                        <p>ersurajkumar1999</p>
                                    </div>
                                    <div className="media">
                                        <label>Experience</label>
                                        <p> <strong>5+ Years</strong> </p>
                                    </div>
                                    <div className="media">
                                        <label>Hourly Rate</label>
                                        <p><strong>$12.00 - $18.00 </strong> </p>
                                    </div>

                                </div>
                            </div>
                            <div className="btn-bar">
                                <a className="px-btn px-btn-primary" href="#">Browse Resume <i className="bi bi-arrow-up-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
