import ShoeItem from "../shoe-item/ShoeItem";
import allShoes from "../../all-shoes.json";


const Pair = ({handleClick, handleWishlist}) => {
  return (
    <section className="home-items-section wrapper">
      <h2 className="home-items-heading">FIND YOUR PAIR</h2>
      <div className="items-section">
        <ShoeItem shoe={allShoes[10]} handleClick={handleClick} handleWishlist={handleWishlist}/>
        <ShoeItem shoe={allShoes[11]} handleClick={handleClick} handleWishlist={handleWishlist}/>
        <ShoeItem shoe={allShoes[12]} handleClick={handleClick} handleWishlist={handleWishlist}/>
        <ShoeItem shoe={allShoes[13]} handleClick={handleClick} handleWishlist={handleWishlist}/>
      </div>
    </section>
  );
};

export default Pair;
