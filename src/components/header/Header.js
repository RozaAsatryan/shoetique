import { useState } from "react";
import { BsBasket3 } from "react-icons/bs";
import { RiUserHeartLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import BurgerMenu from "../burger-menu/BurgerMenu";
import "./Header.css";

const menu = [
  { id: 1, href: "/men", title: "MEN" },
  { id: 2, href: "/women", title: "WOMEN" },
  { id: 3, href: "/kids", title: "KID'S" },
];

const Header = ({ setShow, setShowCart, setShowWishlist, style }) => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  return (
    <header style={style} className="wrapper flexBetween wrapper-padding">
      <div className="heading">
        <Link to="/" className="logo">
          <h1>Shoetique</h1>
        </Link>
      </div>
      <div className="menu">
        <ul className="flexBetween">
          {menu.map((elem, i) => (
            <li key={i}>
              <Link to={elem.href}>{elem.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="header-btns">
        <button
          className="menu-button "
          onClick={() => {
            setShow(true);
            setShowWishlist(true);
          }}
        >
          <RiUserHeartLine />
        </button>
        <button
          className="menu-button"
          onClick={() => {
            setShow(true);
            setShowCart(true);
          }}
        >
          <BsBasket3 />
        </button>
        <button
          className="burger-menu-icon"
          onClick={() => setBurgerMenu(true)}
        >
          <GiHamburgerMenu />
        </button>
        {burgerMenu && <BurgerMenu setBurgerMenu={setBurgerMenu} menu={menu} />}
      </div>
    </header>
  );
};

export default Header;
