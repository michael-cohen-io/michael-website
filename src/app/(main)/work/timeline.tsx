"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function WorkItem({ workItem }: any) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      textClassName="work-item"
      contentArrowStyle={{
        borderRight: "7px solid #3b82f6",
      }}
      date={workItem.startDate.toLocaleDateString("en-US", {})}
      dateClassName="date"
      iconClassName="icon"
      visible={true}
    >
      <h2 className="vertical-timeline-element-title">
        {workItem.team} | {workItem.role}
      </h2>
      <h3 className="vertical-timeline-element-subtitle">
        {workItem.company.name}
      </h3>
    </VerticalTimelineElement>
  );
}

export default function WorkTimeline({ workData }: { workData: any[] }) {
  console.log("WorkTimeline!");
  return (
    <VerticalTimeline>
      {workData.map((work: any) => (
        <WorkItem key={work.id} workItem={work} />
      ))}
    </VerticalTimeline>
  );
}
