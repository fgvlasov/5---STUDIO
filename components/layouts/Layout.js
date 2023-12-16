import Footer from "./Footer";
import Header from "./Header";
import ScrollUp from "./ScrollUp";

const Layout = ({
  layoutSettings = { header: "", footer: "" },
  children,
  showFooter = true,
}) => {
  return (
    <>
      <div className="main-content">
        <Header headerSetting={layoutSettings.header} />
        {children}
        {showFooter && <Footer footerSetting={layoutSettings.footer} />}
      </div>
      <ScrollUp />
    </>
  );
};

export default Layout;
