import { UpdateIcon } from "@radix-ui/react-icons";
import { Flex, IconButton } from "@radix-ui/themes";

export default function LoadingSpinner() {
  return (
    <Flex direction={"column"} justify={"center"} align={"center"} className="animate-spin">
      <IconButton variant="outline" size={"4"} radius="full">
        <UpdateIcon />
      </IconButton>
    </Flex>
  );
}
