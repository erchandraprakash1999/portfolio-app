import profileImage from "../../assets/img/profile/profile-image.jpg";


const Introduction = ({ sectionsRefs }) => {
    return (
        <section ref={(el) => (sectionsRefs.current[0] = el)} className="home-section-02">
            <div className="container">
                <div className="row min-vh-100 align-items-center">
                    <div className="col-left">
                        <div className="home-image">
                            <div className="home-image-in">
                                <img src={profileImage} title="" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-right">
                        <div className="home-intro">
                            <h6>INTRODUCTION</h6>
                            <h2>I am Er Chandra Prakash<span className="text-theme">a Creative Software Developer<span className="text-theme" id="type-it"></span></span></h2>
                            <p>As a Creative Software Developer, I combine my technical expertise with a deep understanding of design principles to create engaging digital solutions. My services include</p>
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

export default Introduction