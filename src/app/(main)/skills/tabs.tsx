"use client";
import React, { useState } from "react";

import Card from "@mui/material/Card";
import IconByName from "@/components/icons/icons";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const iconSize = "5em";

function SkillItem({ skill }: { skill: any }) {
  return (
    <div>
      <Card>
        <IconByName iconName={skill.logo.toUpperCase()} size={iconSize} />
        <h1>{skill.name}</h1>
      </Card>
    </div>
  );
}

function SkillsTabPanel(props: {
  [x: string]: any;
  children: any;
  value: any;
  index: any;
}) {
  const { children, value, index, ...other } = props;

  return (
    <Container
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </Container>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function SkillsTabs({ skillsdivlection }: { skillsdivlection: any }) {
  const [value, setValue] = useState(0);

  const handleChange = (
    _event: any,
    newValue: React.SetStateAction<number>,
  ) => {
    setValue(newValue);
  };

  const skillsObj = skillsdivlection.reduce(
    (map: { [x: string]: any }, obj: { [x: string]: any }) => {
      Object.keys(obj).forEach((skillTree) => {
        map[skillTree] = obj[skillTree];
      });
      return map;
    },
    {},
  );
  const allSkills = Object.keys(skillsObj).flatMap((key) => skillsObj[key]);
  const skillsLabels = Object.keys(skillsObj);
  const skillTabItems = (skillTree: { [x: string]: any }) => {
    return Object.keys(skillTree).map((key) => (
      <SkillItem skill={skillTree[key]} key={key} />
    ));
  };
  const allTabPanel = (
    <SkillsTabPanel value={value} index={0} key="allSkillsTab">
      {allSkills.map((skillUnwrapped) => {
        return Object.keys(skillUnwrapped).map((skillKey) => (
          <SkillItem skill={skillUnwrapped[skillKey]} key={skillKey} />
        ));
      })}
    </SkillsTabPanel>
  );
  const skillTabsPanels = Object.keys(skillsObj).map((skill, index) => (
    <SkillsTabPanel value={value} index={index + 1} key={skill}>
      {skillTabItems(skillsObj[skill])}
    </SkillsTabPanel>
  ));
  return (
    <div>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Skills tabs"
      >
        <Tab label="ALL" key="ALL-0" {...a11yProps(0)} />
        {skillsLabels.map((tabLabel, index) => (
          <Tab
            label={tabLabel}
            key={`${tabLabel}-${index + 1}`}
            {...a11yProps(index + 1)}
          />
        ))}
      </Tabs>
      {allTabPanel}
      {skillTabsPanels}
    </div>
  );
}

export default function SkillsTabSection({ skillsData }: { skillsData: any }) {
  return <SkillsTabs skillsdivlection={skillsData} />;
}
