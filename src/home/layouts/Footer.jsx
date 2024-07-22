import {
    FaFacebook, FaGithub, FaInstagram, FaLinkedinIn,
    FaSkype, FaTwitter
} from "react-icons/fa";
const Footer = () => {

    return (
        <footer className="footer white py-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 py-2">
                        <div className="nav justify-content-center justify-content-md-start">
                            <a href="https://www.facebook.com/profile.php?id=61561559271304" target="_blank"><FaFacebook /></a>
                            <a href="https://twitter.com/erprakash1999" target="_blank"><FaTwitter /></a>
                            <a href="https://www.instagram.com/erchandraprakash1999" target="_blank"><FaInstagram /></a>
                            <a href="https://www.linkedin.com/in/er-chandra-prakash-aa2257315" target="_blank"><FaLinkedinIn /></a>
                            <a href="https://join.skype.com/invite/rU3VwQ7ia7pl" target="_blank"><FaSkype /></a>
                            <a href="https://github.com/erchandraprakash1999" target="_blank"><FaGithub /></a>
                        </div>
                    </div>
                    <div className="col-md-6 py-2 text-center text-md-end">
                        <p className="m-0">© {new Date().getFullYear()} copyright all right reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
