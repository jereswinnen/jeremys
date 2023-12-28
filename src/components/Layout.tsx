import React from "react";
//import Header from "./Header";
import Footer from "./Footer";
import ParallaxDebug from "./ParallaxDebug";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      {/* <ParallaxDebug /> */}
      {/* <Header /> */}
      <section className="layoutMaster">{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
