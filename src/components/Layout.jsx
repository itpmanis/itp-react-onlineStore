import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

// Outlet le hamro route ko path lai match garcha ani tyo path ko component lai render garcha.
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet  />
      <Footer />
    </>
  );
};
export default Layout;
