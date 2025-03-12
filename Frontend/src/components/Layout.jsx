import React from "react";
import Header from "./mainpage/Header";
import Footer from "./mainpage/footer";


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header /> {/* Make sure this is included */}
      <main className="main-content">{children}</main> {/* Main content section */}
      <Footer /> {/* Make sure this is included */}
    </div>
  );
};

export default Layout;
