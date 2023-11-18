"use client";

import IconByName from "@/components/icons/icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useRouter } from "next/navigation";

function formatProjectDate(date: Date) {
  return date.toLocaleString("en-US", { month: "short", year: "numeric" });
}

function WorkItem({ workItem }: any) {
  const router = useRouter();

  const backgroundColor = workItem.iconColor || "#3b82f6";
  const iconStyle = {
    background: backgroundColor,
    color: "#333333",
  };
  const dateStr = `${formatProjectDate(workItem.startDate)} - ${
    workItem.endDate ? formatProjectDate(workItem.endDate) : "Present"
  }`;
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      textClassName="work-item"
      contentStyle={{
        boxShadow: "0 0 0 0",
        background: backgroundColor,
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${backgroundColor}`,
      }}
      date={dateStr}
      dateClassName="date"
      iconStyle={iconStyle}
      iconClassName="icon"
      icon={<IconByName iconName={workItem.company.name} />}
      visible={true}
      onTimelineElementClick={() => router.push(`/work/${workItem.id}`)}
      iconOnClick={() => router.push(`/work/${workItem.id}`)}
    >
      <h2 className="vertical-timeline-element-title">
        {workItem.company.name} | {workItem.role}
      </h2>
      <h3 className="vertical-timeline-element-subtitle">{workItem.team}</h3>
    </VerticalTimelineElement>
  );
}

export default function WorkTimeline({ workData }: { workData: any[] }) {
  return (
    <VerticalTimeline>
      {workData.map((work: any) => (
        <WorkItem key={work.id} workItem={work} />
      ))}
    </VerticalTimeline>
  );
}
