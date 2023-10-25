import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

// Outlet le hamro route ko path lai match garcha ani tyo path ko component lai render garcha.

const Layout = () => {
  const location = useLocation();
  const ignore = ["/login", "/signup"];  // yo path haru ma header ani footer render nagarauna li.

  return (
    <>
      {ignore.includes(location.pathname) ? null : <Header />} 
      {/* simple ternary operator use gareko ho. if ignore array ma location.pathname xa vane header ani footer render nagarauna li. */}
      <Outlet />
      {ignore.includes(location.pathname) ? null : <Footer />}
    </>
  );
};
export default Layout;
