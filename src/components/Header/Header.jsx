import React from "react";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <header className="App__header">
      <div className="container__logo">
        <img src="img/logotechstore.jpg" className="logo" alt="logo" />
        <h2><link to="/">Tech Store</link></h2>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
