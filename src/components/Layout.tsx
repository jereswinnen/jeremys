import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className="mx-auto w-4/5">
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;
