import { useMemo } from "react";
import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { useCursor } from "../../cursor/CursorContext";
import { useTheme } from "../../theme/ThemeProvider";
import profile from "../../content/profile";

interface SiteFooterProps {
  /**
   * When true, the footer is rendered "embedded" within a section
   * (e.g. inside Home slide 3). Use this to adjust margins/padding.
   */
  variant?: "default" | "home";
}

const SocialGithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.86 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.02-1.04-.02-1.88-2.78.62-3.36-1.2-3.36-1.2-.44-1.16-1.08-1.46-1.08-1.46-.88-.62.06-.62.06-.62 1 .08 1.52 1.04 1.52 1.04.88 1.52 2.3 1.08 2.86.82.08-.66.34-1.08.62-1.34-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.4-2.02 1.04-2.74-.1-.26-.46-1.3.1-2.7 0 0 .84-.28 2.76 1.04.8-.22 1.64-.34 2.5-.34.86 0 1.7.12 2.5.34 1.92-1.32 2.76-1.04 2.76-1.04.56 1.4.2 2.44.1 2.7.64.72 1.04 1.62 1.04 2.74 0 3.94-2.34 4.8-4.58 5.06.36.32.68.92.68 1.88 0 1.36-.02 2.46-.02 2.8 0 .26.18.58.68.48 3.98-1.36 6.84-5.18 6.84-9.67C22 6.58 17.52 2 12 2Z"
    />
  </svg>
);

const SocialLinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.56v-5.6c0-1.34-.02-3.06-1.86-3.06-1.86 0-2.14 1.46-2.14 2.96v5.7H9.33V9h3.42v1.56h.04c.48-.9 1.66-1.86 3.4-1.86 3.64 0 4.3 2.4 4.3 5.52v6.22ZM5.34 7.44a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm-1.8 13.01h3.6V9h-3.6v11.45Z"
    />
  </svg>
);

const SocialEmailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M4 5.5h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Zm0 2.2v.24l8 4.74 8-4.74V7.7l-8 4.74-8-4.74Z"
    />
  </svg>
);

export const SiteFooter = ({ variant = "default" }: SiteFooterProps) => {
  const { theme, accentColor } = useTheme();
  const { setInteractive } = useCursor();
  const reduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const footerStyles = useMemo(
    () =>
      ({
        "--footer-accent": accentColor
      }) as CSSProperties,
    [accentColor]
  );

  const className = [
    "site-footer",
    variant === "home" ? "site-footer--home" : "",
    reduceMotion ? "site-footer--reduced-motion" : "",
    theme === "dark" ? "site-footer--dark" : "site-footer--light"
  ]
    .filter(Boolean)
    .join(" ");

  const handlePointerEnter = () => setInteractive(true);
  const handlePointerLeave = () => setInteractive(false);

  return (
    <footer className={className} style={footerStyles}>
      <div className="site-footer-inner">
        <div className="site-footer-col site-footer-identity">
          <span className="site-footer-monogram">MC</span>
          <div className="site-footer-identity-text">
            <span className="site-footer-identity-title">
              Matthew Cue · Junior IT Support / Sysadmin
            </span>
            <span className="site-footer-identity-status">
              Based in California · Open to remote · Actively looking for entry-level roles
            </span>
          </div>
        </div>

        <div className="site-footer-col site-footer-links">
          <Link
            className="site-footer-link"
            to="/"
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            onFocus={handlePointerEnter}
            onBlur={handlePointerLeave}
          >
            Home
          </Link>
          <Link
            className="site-footer-link"
            to="/work"
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            onFocus={handlePointerEnter}
            onBlur={handlePointerLeave}
          >
            Work
          </Link>
          <Link
            className="site-footer-link"
            to="/skills"
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            onFocus={handlePointerEnter}
            onBlur={handlePointerLeave}
          >
            Skills
          </Link>
          <Link
            className="site-footer-link"
            to="/about"
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            onFocus={handlePointerEnter}
            onBlur={handlePointerLeave}
          >
            About
          </Link>
          {/* Optional: enable when the Writing route is ready to surface. */}
          <Link
            className="site-footer-link"
            to="/writing"
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            onFocus={handlePointerEnter}
            onBlur={handlePointerLeave}
          >
            Writing
          </Link>
          <a
            className="site-footer-link"
            href={profile.resumeUrl}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            onFocus={handlePointerEnter}
            onBlur={handlePointerLeave}
            rel="noreferrer"
          >
            Download resume
          </a>
        </div>

        <div className="site-footer-col site-footer-meta">
          <div className="site-footer-social-row">
            {/* TODO: Swap these URLs for profile data when ready. */}
            <a
              className="site-footer-social-button"
              href="https://github.com/username"
              aria-label="Visit GitHub profile"
              onPointerEnter={handlePointerEnter}
              onPointerLeave={handlePointerLeave}
              onFocus={handlePointerEnter}
              onBlur={handlePointerLeave}
              rel="noreferrer"
              target="_blank"
            >
              <SocialGithubIcon />
            </a>
            <a
              className="site-footer-social-button"
              href="https://linkedin.com/in/username"
              aria-label="Visit LinkedIn profile"
              onPointerEnter={handlePointerEnter}
              onPointerLeave={handlePointerLeave}
              onFocus={handlePointerEnter}
              onBlur={handlePointerLeave}
              rel="noreferrer"
              target="_blank"
            >
              <SocialLinkedInIcon />
            </a>
            <a
              className="site-footer-social-button"
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
              onPointerEnter={handlePointerEnter}
              onPointerLeave={handlePointerLeave}
              onFocus={handlePointerEnter}
              onBlur={handlePointerLeave}
            >
              <SocialEmailIcon />
            </a>
          </div>
          <div className="site-footer-meta-text">
            <span>© {currentYear} Matthew Cue</span>
            <span>
              Built with React · Deployed on Netlify
            </span>
            {/* TODO: Update provider when deployment target changes. */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
