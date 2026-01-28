import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useCursor } from "../../cursor/CursorContext";
import { useTheme } from "../../theme/ThemeProvider";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 .5C5.73.5.5 5.87.5 12.47c0 5.3 3.44 9.8 8.2 11.38.6.12.82-.26.82-.58 0-.29-.01-1.06-.02-2.07-3.34.74-4.04-1.65-4.04-1.65-.54-1.41-1.33-1.79-1.33-1.79-1.09-.77.08-.75.08-.75 1.2.09 1.83 1.27 1.83 1.27 1.07 1.88 2.8 1.34 3.49 1.03.11-.8.42-1.34.76-1.65-2.66-.31-5.46-1.38-5.46-6.12 0-1.35.46-2.45 1.23-3.32-.12-.31-.54-1.56.12-3.26 0 0 1-.33 3.3 1.26a11.07 11.07 0 0 1 6 0c2.3-1.59 3.3-1.26 3.3-1.26.66 1.7.24 2.95.12 3.26.76.87 1.23 1.97 1.23 3.32 0 4.76-2.8 5.8-5.48 6.1.43.38.81 1.12.81 2.26 0 1.63-.01 2.94-.01 3.34 0 .32.22.7.82.58 4.77-1.58 8.2-6.07 8.2-11.38C23.5 5.87 18.27.5 12 .5z"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 8.75h3.96V21H3V8.75zM9.75 8.75H13.6v1.67h.05c.54-1.02 1.86-2.1 3.83-2.1 4.1 0 4.86 2.7 4.86 6.22V21h-3.96v-5.44c0-1.3-.02-2.98-1.81-2.98-1.81 0-2.09 1.42-2.09 2.89V21H9.75V8.75z"
    />
  </svg>
);

export type SocialKind = "github" | "linkedin";

interface SocialChipProps {
  kind: SocialKind;
  label: string;
  description: string;
  href: string;
}

export const SocialChip = ({ kind, label, description, href }: SocialChipProps) => {
  const { accentColor, theme } = useTheme();
  const { setInteractive } = useCursor();
  const reduceMotion = useReducedMotion();
  const isGithub = kind === "github";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="social-chip"
      onPointerEnter={() => setInteractive(true)}
      onPointerLeave={() => setInteractive(false)}
      onFocus={() => setInteractive(true)}
      onBlur={() => setInteractive(false)}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { y: 0, scale: 0.99 }}
      style={{ "--chip-accent": accentColor } as CSSProperties}
    >
      <div
        className="social-chip-icon"
        aria-hidden="true"
        style={{
          backgroundColor: isGithub
            ? theme === "dark"
              ? "#020617"
              : "#0f172a"
            : "#0a66c2"
        }}
      >
        {isGithub ? <GitHubIcon /> : <LinkedInIcon />}
      </div>
      <div className="social-chip-text">
        <span className="social-chip-label">{label}</span>
        <span className="social-chip-description">{description}</span>
      </div>
    </motion.a>
  );
};
