import React from "react";
import Header from "../header/Header";

const FooterStyles = {
  width: "100%",
  height: "120px",
  display: "flex",
  background: "black",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "22px",
  textAlign: "center",
};

const layoutStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  minHeight: "90vh",
};

const Footer = () => {
  return (
    <div style={{ ...FooterStyles }}>
      <span>
        copyright ©️ 10기 C반 1조 <br />| 김세연 | 정상욱 | 최신영 |
      </span>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ ...layoutStyles }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
