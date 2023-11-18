"use client";

import IconByName from "@/components/icons/icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useRouter } from "next/navigation";
import { formatDate } from "@/lib/utils";

function WorkItem({ workItem }: any) {
  const router = useRouter();

  const backgroundColor = workItem.iconColor || "#3b82f6";
  const iconStyle = {
    background: backgroundColor,
    border: `0px solid ${backgroundColor}`,
    color: backgroundColor,
  };
  const dateStr = `${formatDate(workItem.startDate)} - ${formatDate(
    workItem.endDate,
  )}`;
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work cursor-pointer"
      textClassName="work-item"
      contentStyle={{
        boxShadow: "none",
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
