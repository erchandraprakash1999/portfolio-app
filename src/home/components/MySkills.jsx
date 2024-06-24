const MySkills = () => {
    const skills = [
        { name: 'HTML', percentage: '90' },
        { name: 'CSS', percentage: '70' },
        { name: 'Java Script', percentage: '80' },
        { name: 'PHP', percentage: '60' },
        { name: 'Laravel', percentage: '90' },
        { name: 'REACT JS', percentage: '70' },
        { name: 'NEXT JS', percentage: '80' },
        { name: 'NODE JS', percentage: '85' },
        { name: 'Mongodb', percentage: '60' },
        { name: 'Express JS', percentage: '70' },
    ]
    return (
        <section className="section border-top-g">
            <div className="container">
                <div className="row section-heading-02">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3><span>My Skills</span></h3>
                            <p>Full Stack & MERN Stack Developer based in <strong>INDIA</strong>.</p>
                        </div>
                    </div>
                </div>
                <div className="row gy-4 justify-content-between">

                    <div className="col-lg-6">
                        {skills.map((skill) => (
                            <div key={skill.name} className="skill-lt">
                                <h6 className="dark-color">{skill.name}</h6>
                                <div className="skill-bar">
                                    <div className="skill-bar-in theme-bg-g" role="progressbar" aria-valuenow={skill.percentage} aria-valuemin="0" aria-valuemax="100">
                                        <span>{skill.percentage}%</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-5">
                        <div className="row gy-4">
                            <div className="col-6">
                                <div className="feature-box-04 media align-items-center">
                                    <div className="icon">
                                        <i className="fas fa-compact-disc"></i>
                                    </div>
                                    <div className="media-body">
                                        <h5>80 Albumes Listened</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="feature-box-04 media align-items-center">
                                    <div className="icon">
                                        <i className="fas fa-trophy"></i>
                                    </div>
                                    <div className="media-body">
                                        <h5>15 Awards Won</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="feature-box-04 media align-items-center">
                                    <div className="icon">
                                        <i className="fas fa-mug-hot"></i>
                                    </div>
                                    <div className="media-body">
                                        <h5>1 000 Cups of coffee</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="feature-box-04 media align-items-center">
                                    <div className="icon">
                                        <i className="fas fa-flag"></i>
                                    </div>
                                    <div className="media-body">
                                        <h5>10 Countries Visited</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MySkills
