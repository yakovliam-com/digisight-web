import { Box, Heading, Text } from "@primer/react";

const DashboardPage = () => {
  return (
    <Box flex={5}>
      <Box height="100%" display={"flex"} flexDirection={"column"}>
        <Box
          p={4}
          bg="canvas.inset"
          border={"1px solid"}
          borderColor={"border.subtle"}
        >
          <Heading>Dashboard</Heading>
          <Text fontSize={"14px"} color={"fg.subtle"}>
            Welcome to Digisight. This is the dashboard.
          </Text>
        </Box>
        <Box flex={1}></Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
