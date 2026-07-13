import { useEffect, useMemo, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import SiteLayout from "./layouts/SiteLayout";
import About from "./pages/public/About";
import Cart from "./pages/public/Cart";
import Contact from "./pages/public/Contact";
import Courses from "./pages/public/Courses";
import Home from "./pages/public/Home";
import Jobs from "./pages/public/Jobs";
import Login from "./pages/public/Login";
import ProductDetails from "./pages/public/ProductDetails";
import Services from "./pages/public/Services";
import Shop from "./pages/public/Shop";
import VerifyCertificate from "./pages/public/VerifyCertificate";
import AdminAssessments from "./pages/admin/AdminAssessments";
import AdminCertificates from "./pages/admin/AdminCertificates";
import AdminCourses from "./pages/admin/AdminCourses";
import AdminExamSubmissions from "./pages/admin/AdminExamSubmissions";
import AdminFinalExam from "./pages/admin/AdminFinalExam";
import AdminMaterials from "./pages/admin/AdminMaterials";
import AdminModules from "./pages/admin/AdminModules";
import AdminOverview from "./pages/admin/AdminOverview";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminStudents from "./pages/admin/AdminStudents";
import FinalExamPage from "./pages/student/FinalExamPage";
import StudentAssessment from "./pages/student/StudentAssessment";
import StudentCertificates from "./pages/student/StudentCertificates";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentModuleView from "./pages/student/StudentModuleView";
import StudentSettings from "./pages/student/StudentSettings";
import Checkout from "./pages/public/Checkout";

const CART_KEY = "stekoraCart";

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function App() {
  const [route, setRoute] = useState(window.location.hash.replace("#", "") || "/");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState(readCart);

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash.replace("#", "") || "/");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const goTo = (nextRoute) => {
    window.location.hash = nextRoute;
    setRoute(nextRoute);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToCart = (product) => {
    setCart((currentCart) => {
      const productId = Number(product.id);
      const existing = currentCart.find((item) => Number(item.id) === productId);
      if (existing) {
        return currentCart.map((item) =>
          Number(item.id) === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentCart, { ...product, id: productId, quantity: 1 }];
    });
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      setCart((items) => items.filter((item) => Number(item.id) !== Number(productId)));
      return;
    }
    setCart((items) => items.map((item) => Number(item.id) === Number(productId) ? { ...item, quantity } : item));
  };

  const removeFromCart = (productId) => setCart((items) => items.filter((item) => Number(item.id) !== Number(productId)));
  const clearCart = () => setCart([]);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const page = useMemo(() => {
    const productMatch = route.match(/^\/product\/(\d+)$/);
    const studentModuleMatch = route.match(/^\/student\/course\/(\d+)\/module\/(\d+)$/);
    const studentAssessmentMatch = route.match(/^\/student\/course\/(\d+)\/module\/(\d+)\/assessment$/);
    const studentFinalExamMatch = route.match(/^\/student\/course\/(\d+)\/final-exam$/);

    if (route.startsWith("/certificate/")) return <VerifyCertificate code={route.split("/").pop()} />;
    if (productMatch) return <ProductDetails productId={productMatch[1]} addToCart={addToCart} goTo={goTo} />;
    if (route === "/services") return <Services />;
    if (route === "/study") return <Courses />;
    if (route === "/jobs") return <Jobs />;
    if (route === "/about") return <About />;
    if (route === "/contact" || route === "/apply-services") return <Contact />;
    if (route === "/shop") return <Shop goTo={goTo} addToCart={addToCart} />;
    if (route === "/cart") return <Cart cart={cart} updateCartQuantity={updateCartQuantity} removeFromCart={removeFromCart} clearCart={clearCart} goTo={goTo} />;
    if (route === "/login") return <Login goTo={goTo} />;
    if (route === "/student") return <StudentDashboard />;
    if (studentAssessmentMatch) return <StudentAssessment courseId={studentAssessmentMatch[1]} moduleId={studentAssessmentMatch[2]} />;
    if (studentModuleMatch) return <StudentModuleView courseId={studentModuleMatch[1]} moduleId={studentModuleMatch[2]} />;
    if (studentFinalExamMatch) return <FinalExamPage courseId={studentFinalExamMatch[1]} />;
    if (route === "/student/certificates") return <StudentCertificates />;
    if (route === "/student/settings") return <StudentSettings />;
    if (route === "/admin/courses") return <AdminCourses />;
    if (route === "/admin/modules") return <AdminModules />;
    if (route === "/admin/materials") return <AdminMaterials />;
    if (route === "/admin/assessments") return <AdminAssessments />;
    if (route === "/admin/final-exam") return <AdminFinalExam />;
    if (route === "/admin/exam-submissions") return <AdminExamSubmissions />;
    if (route === "/admin/students") return <AdminStudents />;
    if (route === "/admin/products") return <AdminProducts />;
    if (route === "/admin/certificates") return <AdminCertificates />;
    if (route === "/admin/settings") return <AdminSettings />;
    if (route === "/admin") return <AdminOverview />;
    if (route === "/checkout") {
  return (
    <Checkout
      cart={cart}
      goTo={goTo}
    />
  );
}
    return <Home goTo={goTo} addToCart={addToCart} />;
  }, [route, cart]);

  const usesSiteLayout = !route.startsWith("/student") && !route.startsWith("/admin") && route !== "/login";

  return (
    <>
      <GlobalStyles />
      {usesSiteLayout ? (
        <SiteLayout route={route} goTo={goTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} cartCount={cartCount}>
          <main>{page}</main>
        </SiteLayout>
      ) : <main>{page}</main>}
    </>
  );
}

export default App;
