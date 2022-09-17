import React from "react";
import shoes from "../../../all-shoes.json";
import ShoeItem from "../../shoe-item/ShoeItem";


const Women = ({ handleClick, handleWishlist }) => {
  const onlyWomen = shoes.filter((shoe) => shoe.collection === "female");
  return (
    <>
      <section className="items-section wrapper wrapper-padding">
        {onlyWomen.map((shoe, i) => (
          <div key={i} className="women-shoes">
            <ShoeItem
              shoe={shoe}
              handleClick={handleClick}
              handleWishlist={handleWishlist}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default Women;
