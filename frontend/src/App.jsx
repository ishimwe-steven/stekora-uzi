import { useEffect, useMemo, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import SiteLayout from "./layouts/SiteLayout";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Courses from "./pages/public/Courses";
import Home from "./pages/public/Home";
import Jobs from "./pages/public/Jobs";
import Login from "./pages/public/Login";
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

function App() {
  const [route, setRoute] = useState(window.location.hash.replace("#", "") || "/");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.replace("#", "") || "/");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const goTo = (nextRoute) => {
    window.location.hash = nextRoute;
    setRoute(nextRoute);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const page = useMemo(() => {
    const studentModuleMatch = route.match(/^\/student\/course\/(\d+)\/module\/(\d+)$/);
    const studentAssessmentMatch = route.match(/^\/student\/course\/(\d+)\/module\/(\d+)\/assessment$/);
    const studentFinalExamMatch = route.match(/^\/student\/course\/(\d+)\/final-exam$/);

    if (route.startsWith("/certificate/")) return <VerifyCertificate code={route.split("/").pop()} />;
    if (route === "/services") return <Services />;
    if (route === "/study") return <Courses />;
    if (route === "/jobs") return <Jobs />;
    if (route === "/about") return <About />;
    if (route === "/contact" || route === "/apply-services") return <Contact />;
    if (route === "/shop") return <Shop />;
    if (route === "/login") return <Login goTo={goTo} />;
    if (route === "/student") return <StudentDashboard />;
    if (studentAssessmentMatch) {
      return <StudentAssessment courseId={studentAssessmentMatch[1]} moduleId={studentAssessmentMatch[2]} />;
    }
    if (studentModuleMatch) {
      return <StudentModuleView courseId={studentModuleMatch[1]} moduleId={studentModuleMatch[2]} />;
    }
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
    return <Home goTo={goTo} />;
  }, [route]);

  const usesSiteLayout = !route.startsWith("/student") && !route.startsWith("/admin") && route !== "/login";

  return (
    <>
      <GlobalStyles />
      {usesSiteLayout ? (
        <SiteLayout route={route} goTo={goTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
          <main>{page}</main>
        </SiteLayout>
      ) : (
        <main>{page}</main>
      )}
    </>
  );
}

export default App;
