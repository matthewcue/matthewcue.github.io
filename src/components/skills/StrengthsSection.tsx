import { motion, useReducedMotion } from "framer-motion";
import {
  CloudIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/24/outline";
import Container from "../Container";
import Icon from "../Icon";
import { useCursor } from "../../cursor/CursorContext";

const strengths = [
  {
    id: "troubleshooting",
    title: "User-facing troubleshooting",
    bullets: [
      "Calm intake, clear notes, and follow-through.",
      "Works through common Windows and macOS issues.",
      "Prioritizes quick wins and user confidence."
    ],
    icon: <WrenchScrewdriverIcon />,
    href: "#skills-matrix"
  },
  {
    id: "systems",
    title: "Systems & OS basics",
    bullets: [
      "Comfortable with Windows Server and Linux basics.",
      "Understands accounts, permissions, and updates.",
      "Uses checklists for repeatable setup."
    ],
    icon: <ComputerDesktopIcon />,
    href: "#skills-matrix"
  },
  {
    id: "networking",
    title: "Networking & connectivity",
    bullets: [
      "Diagnoses DNS, DHCP, and Wi-Fi issues.",
      "Uses core tools like ping, tracert, and nslookup.",
      "Hands-on VLAN practice in a homelab."
    ],
    icon: <UserGroupIcon />,
    href: "#skills-matrix"
  },
  {
    id: "automation",
    title: "Automation & learning",
    bullets: [
      "Writes small PowerShell scripts to save time.",
      "Keeps lab notes and continuous learning plans.",
      "Exploring cloud fundamentals with labs."
    ],
    icon: <CloudIcon />,
    href: "#roadmap"
  }
];

const StrengthsSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const { setInteractive } = useCursor();

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section className="skills-section" aria-labelledby="strengths-title" id="strengths">
      <Container>
        <header className="skills-section__header">
          <p className="section-label">Strengths at a glance</p>
          <h2 id="strengths-title">Where I provide the most value today.</h2>
        </header>
        <motion.div
          className="strengths-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {strengths.map((strength) => (
            <motion.a
              key={strength.id}
              href={strength.href}
              className="strength-card"
              variants={cardVariants}
              onPointerEnter={() => setInteractive(true)}
              onPointerLeave={() => setInteractive(false)}
            >
              <span className="strength-icon">
                <Icon size={22}>{strength.icon}</Icon>
              </span>
              <h3>{strength.title}</h3>
              <ul>
                {strength.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default StrengthsSection;
