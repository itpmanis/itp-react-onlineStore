import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

// Outlet le hamro route ko path lai match garcha ani tyo path ko component lai render garcha.
const ignore = ["/login", "/register"]

const Layout = () => {
  //find current path
  const location = useLocation();
  console.log(location.pathname);

  
  return (
    <>
    {
      ignore.includes(location.pathname) ? null : <Header />
    }
      <Outlet  />
      <Footer />
    </>
  );
};
export default Layout;
