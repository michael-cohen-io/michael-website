"use client";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import {
  Avatar,
  Box,
  Card,
  Flex,
  Heading,
  Link,
  Separator,
  Strong,
  Text,
} from "@radix-ui/themes";

export default function ContactPage() {
  return (
    <>
      <Flex direction="column" align="center" width="100%">
        <Heading size="5" as="h3" mb="4" weight="light">
          Wanna chat? <Strong>Hit my line</Strong>
        </Heading>
        <Card size="3" className="md:min-w-[450px]">
          <Flex
            gap="4"
            align="center"
            direction={{ initial: "column", sm: "row" }}
          >
            <Avatar
              src="/memoji.png"
              fallback="MC"
              size="7"
              radius="full"
              color="indigo"
            />
            <Box>
              <Text
                as="div"
                size="6"
                weight="bold"
                align={{ initial: "center", sm: "left" }}
              >
                Michael Cohen
              </Text>
              <Text
                as="div"
                color="gray"
                align={{ initial: "center", sm: "left" }}
              >
                Engineering
              </Text>
              <Flex direction="column">
                <Flex justify="start" align="center" gap="2">
                  <EnvelopeClosedIcon />
                  <Separator orientation="vertical" />
                  <Link
                    size="4"
                    weight="regular"
                    href="mailto:micohen13@gmail.com"
                  >
                    micohen13@gmail.com
                  </Link>
                </Flex>
                <Flex justify="start" align="center" gap="2">
                  <LinkedInLogoIcon />
                  <Separator orientation="vertical" />
                  <Link
                    size="4"
                    weight="regular"
                    href="https://www.linkedin.com/in/michael-cohen1995"
                  >
                    LinkedIn
                  </Link>
                </Flex>
                <Flex justify="start" align="center" gap="2">
                  <GitHubLogoIcon />
                  <Separator orientation="vertical" />
                  <Link
                    size="4"
                    weight="regular"
                    href="https://github.com/michael-cohen-io"
                  >
                    GitHub
                  </Link>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Card>
      </Flex>
    </>
  );
}
