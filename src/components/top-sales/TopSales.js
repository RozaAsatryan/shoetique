import ShoeItem from "../shoe-item/ShoeItem";
import allShoes from "../../all-shoes.json";
import "./TopSales.css";

const TopSales = ({ handleClick, handleWishlist }) => {
  return (
    <section className="top-section">
      <h2 className="top-heading">NEW ARRIVALS</h2>
      <div className="top-sales">
        <ShoeItem
          shoe={allShoes[0]}
          handleClick={handleClick}
          handleWishlist={handleWishlist}
        />
        <ShoeItem
          shoe={allShoes[1]}
          handleClick={handleClick}
          handleWishlist={handleWishlist}
        />
        <ShoeItem
          shoe={allShoes[2]}
          handleClick={handleClick}
          handleWishlist={handleWishlist}
        />
      </div>
    </section>
  );
};

export default TopSales;
