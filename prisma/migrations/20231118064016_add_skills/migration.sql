-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sectionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "iconColor" TEXT NOT NULL,
    "logo" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillSection" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SkillSection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SkillSection_name_key" ON "SkillSection"("name");

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "SkillSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
