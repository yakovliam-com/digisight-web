import { Box, Button, Heading, Text } from "@primer/react";
import { RxCaretRight } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const GetStartedPage = () => {
  const navigate = useNavigate();
  return (
    <Box flex={5}>
      <Box height="100%" display={"flex"} flexDirection={"column"}>
        <Box
          p={4}
          bg="canvas.inset"
          border={"1px solid"}
          borderColor={"border.subtle"}
        >
          <Heading>Get Started</Heading>
          <Text fontSize={"14px"} color={"fg.subtle"}>
            To get started, you need to create a node group.
          </Text>
        </Box>
        <Box flex={1}>
          <Box
            p={4}
            bg="canvas.inset"
            border={"1px solid"}
            borderColor={"border.subtle"}
          >
            <Button
              trailingIcon={RxCaretRight}
              onClick={() => {
                navigate("/node-editor");
              }}
            >
              Create Node Group
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GetStartedPage;
