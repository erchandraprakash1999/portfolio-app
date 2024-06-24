import { BiCodeAlt, BiBrain, BiLayout, BiCube, BiWrench } from 'react-icons/bi';

const MyServices = ({ sectionsRefs }) => {
    const services = [
        {
            title: 'UI/UX Design',
            icon: <BiCodeAlt />,
            description: 'Our UI/UX design service focuses on creating intuitive and visually appealing user interfaces that enhance user experience. We combine creativity with user-centered design principles to deliver engaging and effective designs tailored to your target audience.'
        },
        {
            title: 'Website Development',
            icon: <BiCodeAlt />,
            description: 'Our website development service offers custom solutions to bring your vision to life on the web. We specialize in creating responsive, fast-loading, and SEO-friendly websites that help you achieve your business goals.'
        },
        {
            title: 'Open AI Development',
            icon: <BiBrain />,
            description: 'Explore the possibilities of AI with our Open AI development service. Whether it\'s natural language processing, computer vision, or machine learning, we leverage cutting-edge AI technologies to build intelligent solutions for your business.'
        },
        {
            title: 'Landing Page Design',
            icon: <BiLayout />,
            description: 'Make a powerful first impression with our landing page design service. We design captivating landing pages that drive conversions and effectively communicate your message, helping you achieve your marketing objectives.'
        },
        {
            title: 'SaaS Solutions',
            icon: <BiCube />,
            description: 'Our SaaS solutions service provides scalable and customizable software-as-a-service solutions to meet your unique business needs. From ideation to deployment, we guide you through the entire SaaS development lifecycle.'
        },
        {
            title: 'Website Maintenance',
            icon: <BiWrench />,
            description: 'Ensure your website runs smoothly and stays up-to-date with our website maintenance service. We offer regular updates, security patches, and technical support to keep your website performing optimally and secure from vulnerabilities.'
        },
    ];
    return (
        <section ref={(el) => (sectionsRefs.current[2] = el)} data-scroll-index="2" className="section services-section border-top-g">
            <div className="container">
                <div className="row section-heading-02">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3><span>My Serverices</span></h3>
                            <p>Full Stack & MERN Stack Developer based in <strong>INDIA</strong>.</p>
                        </div>
                    </div>
                </div>
                <div className="row gy-4">
                    {
                        services.map((service, index) => (
                            <div key={index} className="col-sm-6 col-lg-4">
                                <div className="feature-box-01 media">
                                    <div className="icon"> {service.icon}</div>
                                    <div className="feature-content col">
                                        <h5>{service.title}</h5>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default MyServices
