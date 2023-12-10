import React from "react";
//import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      {/* <Header /> */}
      {/* Page wrapper */}
      <section className="mx-auto w-4/5">{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
