import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

// Outlet le hamro route ko path lai match garcha ani tyo path ko component lai render garcha.

const Layout = () => {
  const location = useLocation();
  const ignore = ["/login", "/register"];

  return (
    <>
      {ignore.includes(location.pathname) ? null : <Header />}
      <Outlet />
      {ignore.includes(location.pathname) ? null : <Footer />}
    </>
  );
};
export default Layout;
