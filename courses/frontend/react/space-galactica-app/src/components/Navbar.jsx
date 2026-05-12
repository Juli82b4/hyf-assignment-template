import { useLocation, Link } from "react-router-dom";
import { NavItem } from "./NavItem.jsx";
import { useAuth } from "../context/AuthContext.jsx";

import styles from "./Navbar.module.css";

const navbarItems = [
  { title: "ABOUT US", link: "/about_us" },
  { title: "DESTINATION", link: "/destination" },
  { title: "NASA COLLABORATION", link: "/nasa_collaboration" },
  { title: "CART", link: "/cart" },
];

export const Navbar = () => {
  const currentPath = useLocation().pathname;
  const { user, logout } = useAuth();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <Link to="/">
          <img src="/shared/logo.svg" alt="Logo GALACTICA" /> GALACTICA
        </Link>
      </div>

      <div className={styles.decorativeLine} />

      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />

        <ul className={styles.navbarList}>
          {navbarItems.map((item, index) => (
            <NavItem
              key={item.link}
              title={item.title}
              link={item.link}
              isActive={item.link === currentPath}
              index={`0${index + 1}`}
            />
          ))}

          {user ? (
            <>
              <NavItem
                title="ORDERS"
                link="/orders"
                isActive={currentPath === "/orders"}
                index="06"
              />
              <li onClick={logout} className={styles.navItem}>
                LOGOUT
              </li>
            </>
          ) : (
            <>
              <NavItem
                title="LOGIN"
                link="/login"
                isActive={currentPath === "/login"}
                index="06"
              />
              <NavItem
                title="REGISTER"
                link="/register"
                isActive={currentPath === "/register"}
                index="07"
              />
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};