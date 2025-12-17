import Navbr from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      {/* SIDEBAR */}
      <Navbr />

      {/* PAGE CONTENT */}
      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
