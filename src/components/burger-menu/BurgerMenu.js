import "./BurgerMenu.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const BurgerMenu = ({ setBurgerMenu, menu }) => {
  return (
    <div className="burger-menu-wrapper">
      <div className="burger-menu-div">
        {menu.map((elem, i) => (
          <Link to={elem.href} key={i} onClick={() => setBurgerMenu(false)}>
            {elem.title}
          </Link>
        ))}
        <button className="back-btn" onClick={() => setBurgerMenu(false)}>
          <IoReturnDownBackSharp className="back-btn-icon" />
        </button>
      </div>
    </div>
  );
};

export default BurgerMenu;
