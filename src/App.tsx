import { Box } from "@primer/react";
import Layout from "./components/layout/Layout";
import Dashboard from "./page/dashboard/Dashboard";
import SidePanel from "./components/sidepanel/SidePanel";
import "reactflow/dist/style.css";

const App = () => {
  return (
    <Layout>
      <Box background={"canvas.default"} display={"flex"} flex={1}>
        <SidePanel />
        <Dashboard />
      </Box>
    </Layout>
  );
};

export default App;
