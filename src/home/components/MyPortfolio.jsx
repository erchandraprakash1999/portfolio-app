import portfolio from "../../assets/img/work-1.jpg";
const MyPortfolio = () => {
    return (
        <div className="container">
            <div className="row section-heading-02">
                <div className="col-md-12">
                    <div className="section-title">
                        <h3><span>My Portfolio</span></h3>
                        <p>A Lead UX &amp; UI designer based in Canada</p>
                    </div>
                </div>
            </div>
            <div className="row portfolio-content lightbox-gallery">
                <div className="grid-item product col-sm-6 col-lg-4 branding">
                    <div className="portfolio-box-01">
                        <div className="portfolio-img">
                            <img src={portfolio} title="" alt="" />
                        </div>
                        <div className="portfolio-info">
                            <h5>Our Photography</h5>
                            <span>Design</span>
                        </div>
                    </div>
                </div>
                <div className="grid-item product col-sm-6 col-lg-4 branding">
                    <div className="portfolio-box-01">
                        <div className="portfolio-img">
                            <img src={portfolio} title="" alt="" />
                        </div>
                        <div className="portfolio-info">
                            <h5>Our Photography</h5>
                            <span>Design</span>
                        </div>
                    </div>
                </div>
                <div className="grid-item product col-sm-6 col-lg-4 branding">
                    <div className="portfolio-box-01">
                        <div className="portfolio-img">
                            <img src={portfolio} title="" alt="" />
                        </div>
                        <div className="portfolio-info">
                            <h5>Our Photography</h5>
                            <span>Design</span>
                        </div>
                    </div>
                </div>
                <div className="grid-item product col-sm-6 col-lg-4 branding">
                    <div className="portfolio-box-01">
                        <div className="portfolio-img">
                            <img src={portfolio} title="" alt="" />
                        </div>
                        <div className="portfolio-info">
                            <h5>Our Photography</h5>
                            <span>Design</span>
                        </div>
                    </div>
                </div>
                <div className="grid-item product col-sm-6 col-lg-4 branding">
                    <div className="portfolio-box-01">
                        <div className="portfolio-img">
                            <img src={portfolio} title="" alt="" />
                        </div>
                        <div className="portfolio-info">
                            <h5>Our Photography</h5>
                            <span>Design</span>
                        </div>
                    </div>
                </div>
                <div className="grid-item product col-sm-6 col-lg-4 branding">
                    <div className="portfolio-box-01">
                        <div className="portfolio-img">
                            <img src={portfolio} title="" alt="" />
                        </div>
                        <div className="portfolio-info">
                            <h5>Our Photography</h5>
                            <span>Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPortfolio