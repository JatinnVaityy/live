import React from "react";
import { Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar
      style={{
        backgroundColor: "#1890ff",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 1000,
        height: "50px",
      }}
    >
      {/* Left side: LiveWell logo */}
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>LiveWell</div>
    </Navbar>
  );
};

export default Header;
