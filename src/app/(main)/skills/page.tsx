import React, { useState } from "react";
import prisma from "@/lib/prisma";

import SkillsTabSection from "./tabs";

async function fetchSkills() {
  const workData = await prisma.workEntry.findMany({
    orderBy: [{ startDate: "desc" }],
    include: {
      company: true,
    },
  });
  return workData;
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
