"use client";

import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import WorkDialog from "@/components/dialog/work-dialog";
import IconByName from "@/components/icons/icons";
import { formatDate } from "@/lib/utils";
import { gray } from "@radix-ui/colors";

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
        boxShadow: "none",
        background: backgroundColor,
        color: "#fff",
        borderRadius: "var(--radius-3)",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${backgroundColor}`,
      }}
      date={dateStr}
      dateClassName="text-slate-500 font-light text-sm"
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
    <VerticalTimeline lineColor={gray.gray6}>
      {workData.map((work: any) => (
        <WorkItem key={work.id} workItem={work} />
      ))}
    </VerticalTimeline>
  );
}
