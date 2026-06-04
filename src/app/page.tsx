import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { portfolioConfig } from "@/config/portfolioConfig";

export default function Home() {
  return (<>
      <Hero />
      <Skills />
      {portfolioConfig.dynamicSections.projects && <Projects />}
      <Contact />
    </>
  );
}