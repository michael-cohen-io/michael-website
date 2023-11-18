import React from "react";
import prisma from "@/lib/prisma";

import SkillsTabSection from "./tabs";

async function fetchSkills() {
  const skills = await prisma.skill.findMany({
    include: {
      section: true,
    },
  });
  console.log(skills);
  return skills;
}

export default async function Skills() {
  const skillsData = await fetchSkills();

  return (
    <section id="skills">
      <h1>Skills</h1>
      <SkillsTabSection skillsData={skillsData} />
    </section>
  );
}
