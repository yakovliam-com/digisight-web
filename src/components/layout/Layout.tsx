import { Box } from "@primer/react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{ width: "100vw", minHeight: "100vh" }}
      bg="canvas.default"
      display={"flex"}
      flexDirection={"column"}
      flex={1}
      height={"100%"}
    >
      <Navbar />
      <Box flex={2} display={"flex"}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
