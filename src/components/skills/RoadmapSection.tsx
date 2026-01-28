import { motion, useReducedMotion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Container from "../Container";
import Icon from "../Icon";
import { RoadmapItem } from "../../content/skills";

const statusLabels: Record<RoadmapItem["status"], string> = {
  planning: "Planning",
  "in-progress": "In progress",
  completed: "Completed"
};

const categoryLabels: Record<RoadmapItem["category"], string> = {
  certification: "Certification",
  lab: "Lab",
  course: "Course",
  project: "Project",
  other: "Other"
};

const formatTargetDate = (date?: string) => {
  if (!date) {
    return null;
  }

  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(parsed);
};

const RoadmapSection = ({ items }: { items: RoadmapItem[] }) => {
  const prefersReducedMotion = useReducedMotion();

  const groups = [
    { id: "now", label: "Now", items: items.filter((item) => item.status === "in-progress") },
    { id: "next", label: "Next", items: items.filter((item) => item.status === "planning") },
    { id: "done", label: "Done", items: items.filter((item) => item.status === "completed") }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 12 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section className="skills-section" aria-labelledby="roadmap-title" id="roadmap">
      <Container>
        <header className="skills-section__header">
          <p className="section-label">Roadmap</p>
          <h2 id="roadmap-title">What I&apos;m working on next.</h2>
          <p className="section-description">
            I treat my homelab and certifications as part of the job: practice now, so I can onboard
            faster later.
          </p>
        </header>

        <div className="roadmap-timeline">
          {groups.map((group) => (
            <div key={group.id} className="roadmap-group">
              <h3 className="roadmap-group__title">{group.label}</h3>
              <ol className="roadmap-list">
                {group.items.map((item) => {
                  const target = formatTargetDate(item.targetDate);
                  return (
                    <motion.li
                      key={item.id}
                      className="roadmap-item"
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <div className="roadmap-item__header">
                        <h4>{item.title}</h4>
                        <div className="roadmap-item__badges">
                          <span className="category-badge">{categoryLabels[item.category]}</span>
                          <span className={`status-pill status-pill--${item.status}`}>
                            {item.status === "completed" && (
                              <Icon size={16}>
                                <CheckCircleIcon />
                              </Icon>
                            )}
                            {statusLabels[item.status]}
                          </span>
                        </div>
                      </div>
                      {item.description && <p>{item.description}</p>}
                      {target && <p className="muted">Target: {target}</p>}
                    </motion.li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RoadmapSection;
