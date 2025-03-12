import React from "react";
import Header from "./mainpage/Header";
import Footer from "./mainpage/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
