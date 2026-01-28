import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  CloudIcon,
  Cog6ToothIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  LifebuoyIcon
} from "@heroicons/react/24/outline";
import Container from "../Container";
import Icon from "../Icon";
import { Skill, SkillArea, SkillLevel } from "../../content/skills";

const iconMap: Record<string, React.ReactElement> = {
  support: <LifebuoyIcon />,
  networking: <GlobeAltIcon />,
  os: <ComputerDesktopIcon />,
  automation: <Cog6ToothIcon />,
  cloud: <CloudIcon />
};

const levelMap: Record<SkillLevel, number> = {
  beginner: 1,
  intermediate: 2,
  advanced: 3
};

const hiddenTags = new Set(["core", "nice-to-have"]);
const deprioritizedTags = new Set(["nice-to-have", "fringe"]);

const SkillLevelIndicator = ({ level }: { level: SkillLevel }) => {
  const count = levelMap[level];
  return (
    <div className="skill-level" aria-label={`Skill level: ${level}`}>
      {Array.from({ length: 3 }).map((_, index) => (
        <span
          key={`level-${level}-${index}`}
          className={index < count ? "skill-level__dot is-active" : "skill-level__dot"}
        />
      ))}
    </div>
  );
};

const filterSkills = (skills: Skill[], view: "job" | "all") => {
  if (view === "all") {
    return skills;
  }

  return skills.filter((skill) => !skill.tags?.some((tag) => deprioritizedTags.has(tag)));
};

const getDisplayTags = (skill: Skill) =>
  skill.tags?.filter((tag) => !hiddenTags.has(tag)).slice(0, 4) ?? [];

const SkillsMatrix = ({ areas }: { areas: SkillArea[] }) => {
  const [view, setView] = useState<"job" | "all">("job");
  const prefersReducedMotion = useReducedMotion();

  const filteredAreas = useMemo(() => {
    return areas
      .map((area) => {
        const skills = filterSkills(area.skills, view);
        return { ...area, skills };
      })
      .filter((area) => area.skills.length > 0);
  }, [areas, view]);

  const areaVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="skills-section" aria-labelledby="skills-matrix-title" id="skills-matrix">
      <Container>
        <header className="skills-section__header skills-section__header--with-toggle">
          <div>
            <p className="section-label">Skills matrix</p>
            <h2 id="skills-matrix-title">Where I&apos;m strongest, and where I&apos;m growing.</h2>
          </div>
          <div className="filter-toggle" role="group" aria-label="Skill matrix view">
            <span className="muted">View:</span>
            <div className="filter-group">
              <button
                type="button"
                className={view === "job" ? "filter-button active" : "filter-button"}
                onClick={() => setView("job")}
              >
                Job-focused
              </button>
              <button
                type="button"
                className={view === "all" ? "filter-button active" : "filter-button"}
                onClick={() => setView("all")}
              >
                Everything
              </button>
            </div>
          </div>
        </header>

        <div className="skills-area-grid">
          {filteredAreas.map((area, index) => (
            <motion.article
              key={area.id}
              className="skills-area-card"
              variants={areaVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: prefersReducedMotion ? 0 : index * 0.05
              }}
            >
              <header className="skills-area-header">
                <span className="skills-area-icon">
                  <Icon size={22}>{iconMap[area.iconKey ?? area.id] ?? <LifebuoyIcon />}</Icon>
                </span>
                <div>
                  <h3>{area.title}</h3>
                  {area.description && <p className="muted">{area.description}</p>}
                </div>
              </header>

              <div className="skills-table" role="table" aria-label={`${area.title} skills`}>
                <div className="skills-table__header" role="row">
                  <span role="columnheader">Skill</span>
                  <span role="columnheader">Level</span>
                  <span role="columnheader">Notes</span>
                  <span role="columnheader">Tags</span>
                </div>
                {area.skills.map((skill) => {
                  const tags = getDisplayTags(skill);
                  return (
                    <div className="skills-table__row" role="row" key={skill.name}>
                      <div className="skills-table__cell skills-table__cell--name" role="cell">
                        <span>{skill.name}</span>
                        <span className="skills-table__level-chip">{skill.level}</span>
                      </div>
                      <div className="skills-table__cell" role="cell">
                        <SkillLevelIndicator level={skill.level} />
                      </div>
                      <div className="skills-table__cell skills-table__cell--notes" role="cell">
                        {skill.notes ?? "—"}
                      </div>
                      <div className="skills-table__cell" role="cell">
                        <div className="skills-tags">
                          {tags.length > 0
                            ? tags.map((tag) => (
                                <span key={`${skill.name}-${tag}`} className="skill-tag">
                                  {tag}
                                </span>
                              ))
                            : "—"}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillsMatrix;
