import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { TiSocialGooglePlus } from "react-icons/ti";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
      <button><BsTwitter /></button>  
      <button><BsGithub /></button> 
      <button><TiSocialGooglePlus /></button>
      <button><BsLinkedin /></button> 
      </div>
      <h4>Copyright &#169;{new Date().getFullYear()} {document.title} </h4>
    </div>
  );
};

export default Footer;
