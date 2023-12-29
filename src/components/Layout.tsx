import React from "react";
//import Header from "./Header";
import Footer from "./Footer";
import DebugParallax from "./DebugParallax";

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
