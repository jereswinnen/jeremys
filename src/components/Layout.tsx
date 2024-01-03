import React from "react";
//import Header from "./base/Header";
import Footer from "./base/Footer";
import DebugParallax from "./debug/DebugParallax";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      {/* <DebugParallax /> */}
      {/* <Header /> */}
      <section className="layoutMaster">{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
