import ShoeItem from "../shoe-item/ShoeItem";
import allShoes from "../../all-shoes.json";

const TopSales = ({ handleClick, handleWishlist }) => {
  return (
    <section className="home-items-section wrapper">
      <h2 className="home-items-heading">NEW ARRIVALS</h2>
      <div className="items-section">
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
        <ShoeItem
          shoe={allShoes[3]}
          handleClick={handleClick}
          handleWishlist={handleWishlist}
        />
      </div>
    </section>
  );
};

export default TopSales;
