import React from "react";
import shoes from "../../../all-shoes.json";
import ShoeItem from "../../shoe-item/ShoeItem";

const Kid = ({ handleClick, handleWishlist }) => {
  const onlyKids = shoes.filter((shoe) => shoe.collection === "kids");
  return (
    <>
      <section className="items-section wrapper wrapper-padding">
        {onlyKids.map((shoe, i) => (
          <div key={i} className="kid-shoe-item">
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

export default Kid;
