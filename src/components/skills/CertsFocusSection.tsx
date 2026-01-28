import { motion, useReducedMotion } from "framer-motion";
import { AcademicCapIcon, ShieldCheckIcon, SignalIcon, WrenchIcon } from "@heroicons/react/24/outline";
import Container from "../Container";
import Icon from "../Icon";
import { RoadmapItem } from "../../content/skills";

const progressByStatus: Record<RoadmapItem["status"], number> = {
  planning: 0.15,
  "in-progress": 0.55,
  completed: 1
};

const focusAreas = [
  {
    id: "support",
    title: "Support & troubleshooting",
    description: "User support, tickets, and fixes that stick.",
    icon: <WrenchIcon />
  },
  {
    id: "systems",
    title: "Systems & OS",
    description: "Windows and Linux basics for stable systems.",
    icon: <AcademicCapIcon />
  },
  {
    id: "networking",
    title: "Networking basics",
    description: "DNS, DHCP, Wi-Fi, and connectivity checks.",
    icon: <SignalIcon />
  },
  {
    id: "cloud",
    title: "Cloud & security fundamentals",
    description: "Identity, storage, and foundational security practices.",
    icon: <ShieldCheckIcon />
  }
];

const CertsFocusSection = ({ items }: { items: RoadmapItem[] }) => {
  const prefersReducedMotion = useReducedMotion();
  const certifications = items.filter((item) => item.category === "certification");

  return (
    <section className="skills-section" aria-labelledby="certs-focus-title" id="certifications">
      <Container>
        <header className="skills-section__header">
          <p className="section-label">Certs &amp; focus areas</p>
          <h2 id="certs-focus-title">Certifications &amp; focus areas</h2>
        </header>

        <div className="certs-focus-grid">
          <div className="certs-card" aria-labelledby="certs-title">
            <header className="skills-section__header">
              <h3 id="certs-title">Certifications &amp; exams</h3>
            </header>
            <div className="certs-list">
              {certifications.map((item) => {
                const progress = progressByStatus[item.status];
                return (
                  <div key={item.id} className="cert-card">
                    <div className="cert-card__header">
                      <h4>{item.title}</h4>
                      <span className={`status-pill status-pill--${item.status}`}>
                        {item.status.replace("-", " ")}
                      </span>
                    </div>
                    {item.description && <p className="muted">{item.description}</p>}
                    <div className="progress-bar" aria-hidden>
                      <motion.span
                        className="progress-bar__fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progress * 100}%` }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.6 }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="focus-card" aria-labelledby="focus-title">
            <header className="skills-section__header">
              <h3 id="focus-title">Focus areas</h3>
            </header>
            <div className="focus-grid">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.id}
                  className="focus-chip"
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: prefersReducedMotion ? 0 : index * 0.05
                  }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <span className="focus-chip__icon">
                    <Icon size={18}>{area.icon}</Icon>
                  </span>
                  <div>
                    <strong>{area.title}</strong>
                    <span className="muted">{area.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CertsFocusSection;
