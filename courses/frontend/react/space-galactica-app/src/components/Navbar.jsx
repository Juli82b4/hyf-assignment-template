import { useLocation } from "react-router-dom";
import { NavItem } from "./NavItem.jsx";
import { useWishlist } from "../contexts/WishlistContext.jsx";

import styles from './Navbar.module.css';

const navbarItems = [
  {
    title: 'ABOUT US',
    link: '/about_us',
  },
  {
    title: 'DESTINATION',
    link: '/destination',
  },
  {
    title: 'NASA COLLABORATION',
    link: '/nasa_collaboration',
  }
];

export const Navbar = () => {
  const currentPath = useLocation().pathname;

  //TASK 4 ADDITION
  const { wishlistCount } = useWishlist();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA

          <span className={styles.badge}>
            {wishlistCount}
          </span>
          
        </a>
      </div>

      <div className={styles.decorativeLine} />

      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />

        <ul className={styles.navbarList}>
          {/* Task - Week 2 - this part has been deleted and replaced with map week 3 */}
          {/* Create a <NavItem> component, which accepts the following:  */}
          {/* title, link, isActive   */}
          {/* Task - Week 3 */}
          {/* replace repeating content by using navbarItems.map(() => <NavLink />) */}

          {navbarItems.map((item, index) => (
            <NavItem
              key={item.link}
              title={item.title}
              link={item.link}
              isActive={item.link === currentPath}
              index={`0${index + 1}`}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}