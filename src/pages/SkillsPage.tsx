import PageTransition from "../components/PageTransition";
import SkillsHero from "../components/skills/SkillsHero";
import StrengthsSection from "../components/skills/StrengthsSection";
import SkillsMatrix from "../components/skills/SkillsMatrix";
import RoadmapSection from "../components/skills/RoadmapSection";
import CertsFocusSection from "../components/skills/CertsFocusSection";
import AppliedSkillsSection from "../components/skills/AppliedSkillsSection";
import SkillsCtaSection from "../components/skills/SkillsCtaSection";
import { skillAreas, roadmap } from "../content/skills";
import { projects } from "../content/projects";
import labEntries from "../content/labEntries";
import profile from "../content/profile";

const SkillsPage = () => (
  <PageTransition>
    <div className="skills-page">
      <SkillsHero />
      <StrengthsSection />
      <SkillsMatrix areas={skillAreas} />
      <RoadmapSection items={roadmap} />
      <CertsFocusSection items={roadmap} />
      <AppliedSkillsSection projects={projects} labEntries={labEntries} />
      <SkillsCtaSection email={profile.email} />
    </div>
  </PageTransition>
);

export default SkillsPage;
