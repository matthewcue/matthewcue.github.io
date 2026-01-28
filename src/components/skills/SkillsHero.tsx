import { motion, useReducedMotion } from "framer-motion";
import Container from "../Container";

const readyForChips = [
  "Junior IT Support",
  "Help Desk / Service Desk",
  "Junior Sysadmin",
  "IT Operations"
];

const coreAreas = [
  "Windows & macOS support",
  "Basic networking",
  "Linux server basics",
  "Scripting & SQL",
  "Homelab & tinkering"
];

const SkillsHero = () => {
  const prefersReducedMotion = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const staggerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12
      }
    }
  };

  return (
    <section className="skills-hero" aria-labelledby="skills-hero-title">
      <Container>
        <div className="skills-hero__grid">
          <motion.div
            className="skills-hero__copy"
            variants={staggerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.p className="section-label" variants={itemVariants}>
              Skills &amp; Experience
            </motion.p>
            <motion.h1 id="skills-hero-title" className="skills-hero__title" variants={itemVariants}>
              What I can do for your team right now.
            </motion.h1>
            <motion.p className="skills-hero__subcopy" variants={itemVariants}>
              I&apos;m focused on IT support and systems work: helping users stay productive, keeping
              machines usable, and learning the cloud and security skills that make a team more
              resilient.
            </motion.p>
            <motion.div className="skills-hero__chips" variants={itemVariants}>
              {readyForChips.map((chip) => (
                <span key={chip} className="skills-chip">
                  {chip}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="skills-hero__card"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.2 }}
          >
            <h2 className="skills-hero__card-title">Core areas</h2>
            <div className="skills-hero__core">
              {coreAreas.map((area) => (
                <span key={area} className="skills-chip skills-chip--solid">
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SkillsHero;
