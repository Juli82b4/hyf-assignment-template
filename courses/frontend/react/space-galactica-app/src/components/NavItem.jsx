import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./Navbar.module.css";

export const NavItem = ({ title, link, isActive }) => {
    return (
        <li
            className={classNames(styles.navbarLinks, {
                [styles.isLinkActive]: isActive,
            })}
        >
            <Link to={link}>
                <b>{index}</b> {title}
            </Link>
        </li>
    );
};