import React from "react";

function Header() {
  return (
    <div className="header">
      <a href="/" style={{textDecoration:"none", color:"#ffffff"}}>
        <h2 className="title">
          Brawl<span style={{ color: "#f21101" }}>Alytics</span>
        </h2>
      </a>
    </div>
  );
}

export default Header;
