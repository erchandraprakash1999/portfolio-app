import testimonial from "../../assets/img/work-1.jpg";
const LatestBlogs = () => {
    return (
        <section className="section border-top-g blog-section">
            <div className="container">
                <div className="row section-heading-02">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3><span>Latest Blogs</span></h3>
                            <p>A Lead UX &amp; UI designer based in Canada</p>
                        </div>
                    </div>
                </div>
                <div className="row gy-4">
                    <div className="col-lg-4">
                        <div className="blog-post">
                            <div className="blog-post-img">
                                <a href="#">
                                    <img src={testimonial} title="" alt="" />
                                </a>
                            </div>
                            <div className="blog-post-info">
                                <div className="b-meta">
                                    <span className="date">02 Mar</span>
                                </div>
                                <h5><a href="#">Make your Marketing website</a></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="btn-grid">
                                    <a className="link-effect" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-post">
                            <div className="blog-post-img">
                                <a href="#">
                                    <img src={testimonial} title="" alt="" />
                                </a>
                            </div>
                            <div className="blog-post-info">
                                <div className="b-meta">
                                    <span className="date">02 Mar</span>
                                </div>
                                <h5><a href="#">Make your Marketing website</a></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="btn-grid">
                                    <a className="link-effect" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-post">
                            <div className="blog-post-img">
                                <a href="#">
                                    <img src={testimonial} title="" alt="" />
                                </a>
                            </div>
                            <div className="blog-post-info">
                                <div className="b-meta">
                                    <span className="date">02 Mar</span>
                                </div>
                                <h5><a href="#">Make your Marketing website</a></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="btn-grid">
                                    <a className="link-effect" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestBlogs
