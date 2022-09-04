import { BsTrash } from "react-icons/bs";
import "./Wishlist.css";

const Wishlist = ({ wishlist, setWishlist }) => {
  const handleRemove = (id) => {
    const arr = wishlist.filter((item) => item.id !== id);
    setWishlist(arr);
  };
  return (
    <>
      {wishlist.length ? (
        <>
          <h2>Wish List</h2>
          <table>
            <tr className="table-head">
              <th>ITEM</th>
              <th>TITLE</th>
              <th>PRICE</th>
              <th>REMOVE</th>
            </tr>

            {wishlist.map((wish, i) => (
              <>
                <tr>
                  <td>
                    <img className="table-img" src={wish.img} alt={wish.title} />
                  </td>
                  <td>
                    <h3>{wish.title}</h3>
                    <p>{wish.descr}</p>
                  </td>
                  <td>$ {wish.price}</td>
                  <td>
                    <button
                      className="remove"
                      onClick={() => handleRemove(wish.id)}
                    >
                      <BsTrash className="remove-icon" />
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </table>
        </>
      ) : (
        <div className="empty-wishlist">
          <img
            src="https://www.our-eshop.com/frontend/assets/images/no-wish-list.png"
            alt="empty wishlist"
          />
        </div>
      )}
    </>
  );
};

export default Wishlist;
