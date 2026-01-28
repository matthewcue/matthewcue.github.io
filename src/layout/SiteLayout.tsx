import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import CustomCursor from "../components/CustomCursor";
import ThemeToggleFloating from "../components/ThemeToggleFloating";
import { SiteFooter } from "../components/layout/SiteFooter";

// Shared shell for all pages: header, main content, and footer.
const SiteLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="app-shell">
      <Navbar />
      <ThemeToggleFloating />
      <main className={`app-main ${isHome ? "home-main" : ""}`.trim()}>
        {isHome ? (
          <Outlet />
        ) : (
          <Container>
            <Outlet />
          </Container>
        )}
      </main>
      {!isHome && <SiteFooter variant="default" />}
      {/* Render once at the root so every page can share the same cursor. */}
      <CustomCursor />
    </div>
  );
};

export default SiteLayout;
