import ShoeItem from "../shoe-item/ShoeItem";
import allShoes from "../../all-shoes.json";
import "./Pair.css";

const Pair = ({handleClick, handleWishlist}) => {
  return (
    <section className="pair-section">
      <h2 className="pair-heading">FIND YOUR PAIR</h2>
      <div className="pair-items">
        <ShoeItem shoe={allShoes[10]} handleClick={handleClick} handleWishlist={handleWishlist}/>
        <ShoeItem shoe={allShoes[11]} handleClick={handleClick} handleWishlist={handleWishlist}/>
        <ShoeItem shoe={allShoes[12]} handleClick={handleClick} handleWishlist={handleWishlist}/>
      </div>
    </section>
  );
};

export default Pair;
