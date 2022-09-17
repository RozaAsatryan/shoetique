import React from "react";
import shoes from "../../../all-shoes.json";
import ShoeItem from "../../shoe-item/ShoeItem";

const Men = ({ handleClick, handleWishlist }) => {
  const onlyMen = shoes.filter((shoe) => shoe.collection === "male");
  return (
    <>
      <section className="items-section wrapper wrapper-padding">
        {onlyMen.map((shoe, i) => (
          <div key={i} className="men-shoes">
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

export default Men;
