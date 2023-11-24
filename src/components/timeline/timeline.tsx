"use client";

import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import WorkDialog from "@/components/dialog/work-dialog";
import IconByName from "@/components/icons/icons";
import useMediaQuery from "@/lib/hooks/use-media-query";
import { formatDate } from "@/lib/utils";
import { gray } from "@radix-ui/colors";
import * as Dialog from "@radix-ui/react-dialog";
import { Box, Flex } from "@radix-ui/themes";

function WorkItem({ workItem, workItemDescriptionComponent }: any) {
  const { isMobile } = useMediaQuery();
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
    <Dialog.Root>
      <VerticalTimelineElement
        className="vertical-timeline-element--work cursor-pointer font-light"
        textClassName="work-item"
        contentStyle={{
          boxShadow: "none",
          background: backgroundColor,
          color: "var(--white-a12)",
          borderRadius: "var(--radius-3)",
        }}
        contentArrowStyle={{
          borderRight: `7px solid ${backgroundColor}`,
        }}
        date={dateStr}
        dateClassName={`font-light text-sm work-timeline--${
          isMobile ? "date-mobile" : "date"
        }`}
        iconStyle={iconStyle}
        iconClassName="icon"
        icon={
          <Flex className="flex justify-center">
            <Dialog.Trigger asChild>
              <Box position="fixed" top="50%">
                <IconByName iconName={workItem.company.name} />
              </Box>
            </Dialog.Trigger>
          </Flex>
        }
        visible={true}
      >
        <WorkDialog
          workItem={workItem}
          workItemDescriptionComponent={workItemDescriptionComponent}
        />
      </VerticalTimelineElement>
    </Dialog.Root>
  );
}

export default function WorkTimeline({
  workData,
  workItemDescriptionComponentMap,
}: {
  workData: any[];
  workItemDescriptionComponentMap: any;
}) {
  return (
    <VerticalTimeline lineColor={gray.gray6}>
      {workData.map((work: any) => {
        const workItemDescriptionComponent =
          workItemDescriptionComponentMap[work.id];
        return (
          <WorkItem
            key={work.id}
            workItem={work}
            workItemDescriptionComponent={workItemDescriptionComponent}
          />
        );
      })}
    </VerticalTimeline>
  );
}
