import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import CustomCursor from "../components/CustomCursor";
import ThemeToggleFloating from "../components/ThemeToggleFloating";

// Shared shell for all pages: header, main content, and footer.
const SiteLayout = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";
  const mainClassName = ["app-main", isHomeRoute ? "home-main" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="app-shell">
      <Navbar />
      <ThemeToggleFloating />
      <main className={mainClassName}>
        {isHomeRoute ? (
          <Outlet />
        ) : (
          <Container>
            <Outlet />
          </Container>
        )}
      </main>
      <Footer />
      {/* Render once at the root so every page can share the same cursor. */}
      <CustomCursor />
    </div>
  );
};

export default SiteLayout;
