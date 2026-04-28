import { useLocation, Link } from "react-router-dom";
import styles from './Footer.module.css';
import { SocialMediaItem } from "./SocialMediaItem";

export const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className={pathname !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>Explore the universe and beyond. Your journey to the stars starts here.</p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      {/* Task - Week 2 */}
      {/* Create a new List for the Pages */}
      {/* We need to use the <Link /> component here */}
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li> <Link to="/about_us" >About Us </Link></li>
          <li><Link to="/destination">Destination</Link></li>
          <li><Link to="/nasa_collaboration">Nasa Collaboration</Link></li>
        </ul>
      </div>
      {/* Docs for the Link: https://reactrouter.com/api/components/Link#link */}

      {/* Task - Week 1 - done*/}
      {/* Add a new list item for LINKEDIN */}
      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          <SocialMediaItem
            url="https://facebook.com"
            title="Facebook"
            icon="/socialmedia/fb.svg"
          />

          <SocialMediaItem
            url="https://instagram.com"
            title="Instagram"
            icon="/socialmedia/insta.svg"
          />

          <SocialMediaItem
            url="https://tiktok.com"
            title="TikTok"
            icon="/socialmedia/tiktok.svg"
          />

          <SocialMediaItem
            url="https://google.com"
            title="On the streets at night"
            icon="/socialmedia/night.jpg"
          />

          <SocialMediaItem
            url="https://linkedin.com"
            title="LinkedIn"
            icon="/socialmedia/linkedIn.svg"
          />

          {/* Task - Week 2 */}
          {/* Create a <SocialMediaItem /> component and replace all of the list items! */}
          {/* it should accept the following props */}
          {/* url, title, icon */}
          {/* For the icons, you can download 1-2 social media icons for testing and put it in the /public/socialmedia/ folder */}
        </ul>
      </div>
    </footer>
  );
}
