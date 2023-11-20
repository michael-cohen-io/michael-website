import React from "react";

import Tabs from "@/components/tabs/tabs";
import prisma, { SkillWithSection } from "@/lib/prisma";

async function fetchSkills(): Promise<SkillWithSection[]> {
  const skills = await prisma.skill.findMany({
    include: {
      section: true,
    },
    orderBy: {
      sectionId: "asc",
    },
  });
  return skills;
}

export default async function Skills() {
  const skillsData = await fetchSkills();

  const sectionIdToName = skillsData.reduce(
    (acc, skill) => {
      const { section } = skill;
      const { id, name } = section;
      acc[id] = name;
      return acc;
    },
    {} as Record<number, string>,
  );
  sectionIdToName[0] = "All";
  const sectionIdToSkills = skillsData.reduce(
    (acc, skill) => {
      const { section } = skill;
      const { id } = section;
      if (acc[id]) {
        acc[id].push(skill);
      } else {
        acc[id] = [skill];
      }
      return acc;
    },
    {} as Record<number, any[]>,
  );
  sectionIdToSkills[0] = skillsData;
  return (
    <div className="z-10 w-full max-w-6xl px-1 xl:px-0">
      <Tabs tabDictionary={sectionIdToSkills} tabIdToName={sectionIdToName} />
    </div>
  );
}
