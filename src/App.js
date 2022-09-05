import React, { useState} from "react";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Modal from "./components/Modal/Modal";
import TopSales from "./components/top-sales/TopSales";
import CartDiv from "./components/cart-section/CartDiv";
import BannerPair from "./components/banner-pair/BannerPair";
import Pair from "./components/pair-section/Pair";
import Footer from "./components/footer/Footer";
import Wishlist from "./components/wishlist/Wishlist";
import "./index.css";

import { Routes, Route } from "react-router-dom";
import Men from "./components/Pages/Men/Men";
import Women from "./components/Pages/Women/Women";
import Kid from "./components/Pages/Kid/Kid";

const App = () => {
  const [show, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const [showWishlist, setShowWishlist] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  const handleClick = (item) => {
    if (cart.filter((e) => e.id === item.id).length === 0)
      setCart([...cart, item]);
  };

  const handleWishlist = (item) => {
    if (wishlist.filter((e) => e.id === item.id).length === 0)
      setWishlist([...wishlist, item]);
  };
  const handleChange = (item, d) => {
    const index = cart.indexOf(item);
    const arr = cart;
    arr[index].amount += d;
    if (arr[index].amount === 0) arr[index].amount = 1;
    setCart([...arr]);
  };


  return (
    <section>
      {show && (
        <Modal
          setShow={setShow}
          setShowCart={setShowCart}
          setShowWishlist={setShowWishlist}
        >
          {showCart && (
            <CartDiv
              cart={cart}
              setCart={setCart}
              handleChange={handleChange}
            />
          )}
          {showWishlist && (
            <Wishlist wishlist={wishlist} setWishlist={setWishlist} />
          )}
        </Modal>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section className="first-screen">
                <Header
                  setShow={setShow}
                  setShowCart={setShowCart}
                  setShowWishlist={setShowWishlist}
                />
                <Banner />
              </section>
              <TopSales
                handleClick={handleClick}
                handleWishlist={handleWishlist}
              />

              <BannerPair />
              <Pair handleClick={handleClick} handleWishlist={handleWishlist} />
            </>
          }
        />
        <Route
          path="/men"
          element={
            <>
              <section className="collection-top-section men-section">
                <Header
                  setShow={setShow}
                  setShowCart={setShowCart}
                  setShowWishlist={setShowWishlist}
                />
                <h2 className="collection-heading">Men's collection</h2>
              </section>
              <Men handleClick={handleClick} handleWishlist={handleWishlist} />
            </>
          }
        />
        <Route
          path="/women"
          element={
            <>
              <section className="collection-top-section women-section">
                <Header
                  setShow={setShow}
                  setShowCart={setShowCart}
                  setShowWishlist={setShowWishlist}
                />
                <h2 className="collection-heading">Women's collection</h2>
              </section>
              <Women
                handleClick={handleClick}
                handleWishlist={handleWishlist}
              />
            </>
          }
        />
        <Route
          path="/kids"
          element={
            <>
              <section className="collection-top-section kids-section">
                <Header
                  setShow={setShow}
                  setShowCart={setShowCart}
                  setShowWishlist={setShowWishlist}
                />
                <h2 className="collection-heading">Kid's collection</h2>
              </section>
              <Kid handleClick={handleClick} handleWishlist={handleWishlist} />
            </>
          }
        />
      </Routes>
      <Footer />
    </section>
  );
};

export default App;
