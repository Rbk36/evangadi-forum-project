import "./footer.css";
import logo from "../../assets/img/logo.jpg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <section className="footer_wrapper">
      <div className="footer_section">
        <img src={logo} alt="Logo" />
        <ul className="social_links">
          <li>
            <FacebookOutlinedIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <YouTubeIcon />
          </li>
        </ul>
      </div>

      <div className="footer_section">
        <h3>Useful Links</h3>
        <ul>
          <li>How it works</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="footer_section">
        <h3>Contact Info</h3>
        <ul>
          <li>Evangadi Networks</li>
          <li>support@evangadi.com</li>
          <li>+1-202-386-2702</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
