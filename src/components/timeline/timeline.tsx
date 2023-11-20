"use client";

import IconByName from "@/components/icons/icons";
import WorkDialog from "@/components/dialog/work-dialog";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { formatDate } from "@/lib/utils";

function WorkItem({ workItem }: any) {
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
      className="vertical-timeline-element--work cursor-pointer font-light"
      textClassName="work-item"
      contentStyle={{
        // TODO: change based on light dark mode
        boxShadow: "none",
        background: backgroundColor,
        color: "#fff",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${backgroundColor}`,
      }}
      date={dateStr}
      dateClassName="text-slate-500"
      iconStyle={iconStyle}
      iconClassName="icon"
      icon={<IconByName iconName={workItem.company.name} />}
      visible={true}
    >
      <WorkDialog workItem={workItem} />
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
