import FloatingActions from "../components/public/FloatingActions";
import Footer from "../components/public/Footer";
import Navbar from "../components/public/Navbar";

export default function SiteLayout({ route, goTo, menuOpen, setMenuOpen, children }) {
  return (
    <>
      <Navbar route={route} goTo={goTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {children}
      <Footer goTo={goTo} />
      <FloatingActions goTo={goTo} />
    </>
  );
}
