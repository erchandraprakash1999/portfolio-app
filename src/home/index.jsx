import { useEffect } from 'react';
import Technologies from "./components/Technologies";
import MyServices from "./components/MyServices";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import LatestBlogs from "./components/LatestBlogs";
import GetInTouch from "./components/GetInTouch";


const HomePage = ({ sectionsRefs }) => {
    useEffect(() => {
        const handleScroll = () => {
            const skillBars = document.querySelectorAll('.skill-bar-in');
            skillBars.forEach(bar => {
                const bottomObject = bar.offsetTop + bar.offsetHeight;
                const bottomWindow = window.scrollY + window.innerHeight;
                const progressWidth = bar.getAttribute('aria-valuenow') + '%';
                if (bottomWindow > bottomObject) {
                    bar.style.width = progressWidth;
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <main className="wrapper">
            <Introduction sectionsRefs={sectionsRefs} />

            <AboutMe sectionsRefs={sectionsRefs} />
            <MySkills />

            <MyServices sectionsRefs={sectionsRefs} />

            <Portfolio sectionsRefs={sectionsRefs} />

            <Testimonial />
            {/* <LatestBlogs /> */}
           
            <Technologies />
            <GetInTouch sectionsRefs={sectionsRefs}/>
            
        </main>
    )
}

export default HomePage