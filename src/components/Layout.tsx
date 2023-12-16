import React from "react";
//import Header from "./Header";
import Footer from "./Footer";
import ParallaxDebug from "./ParallaxDebug";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="mx-auto w-4/5">
      <ParallaxDebug />
      {/* <Header /> */}
      {/* Page wrapper */}
      <section className="grid grid-cols-8">{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
