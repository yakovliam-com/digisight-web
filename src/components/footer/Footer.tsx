import { Box, Text } from "@primer/react";

const Footer = () => {
  return (
    <Box bg="canvas.subtle" p={20}>
      <Text>&copy; {new Date().getFullYear()} YAKOVLIAM DBA DIGISIGHT</Text>
    </Box>
  );
};

export default Footer;
