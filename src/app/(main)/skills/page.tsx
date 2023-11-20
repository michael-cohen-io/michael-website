import React from "react";

// import prisma from "@/lib/prisma";

// async function fetchSkills() {
//   const skills = await prisma.skill.findMany({
//     include: {
//       section: true,
//     },
//   });
//   return skills;
// }

export default async function Skills() {
  // const skillsData = await fetchSkills();

  return (
    <div className="z-10 w-full max-w-6xl px-1 xl:px-0">
      <h1 className="text-center font-display font-light text-4xl">
        coming soon...
      </h1>
    </div>
  );
}
