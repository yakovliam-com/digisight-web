import { BaseStyles, Box, Spinner, ThemeProvider } from "@primer/react";
import Layout from "./components/layout/Layout";
import NodeEditorPage from "./page/nodeeditor/NodeEditorPage";
import SidePanel from "./components/sidepanel/SidePanel";
import "reactflow/dist/style.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Outlet, Route, Routes } from "react-router-dom";
import GetStartedPage from "./page/getstarted/GetStartedPage";
import DashboardPage from "./page/dashboard/DashboardPage";
import ProtectedRoute from "./components/route/ProtectedRoute";
import { useRecoilValue } from "recoil";
import { darkModeState } from "./recoil/atoms";

const App = () => {
  const { isLoading } = useAuth0();
  const isDarkMode = useRecoilValue(darkModeState);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ThemeProvider
      colorMode={isDarkMode ? "dark" : "light"}
      dayScheme="light"
      nightScheme="dark_dimmed"
    >
      <BaseStyles>
        <Layout>
          <Routes>
            <Route element={<ProtectedRoute redirectPath="/login" />}>
              <Route element={<AppContent />}>
                <Route path={"/dashboard"} element={<DashboardPage />} />
                <Route path={"/get-started"} element={<GetStartedPage />} />
                <Route path={"/node-editor"} element={<NodeEditorPage />} />
              </Route>
            </Route>
            <Route path="/" element={<Box>Home</Box>} />
            <Route path={"/login"} element={<Box>Login</Box>} />
            <Route path={"*"} element={<Box>404</Box>} />
          </Routes>
        </Layout>
      </BaseStyles>
    </ThemeProvider>
  );
};

const AppContent = () => {
  return (
    <Box background={"canvas.default"} display={"flex"} flex={1}>
      <SidePanel />
      <Outlet />
    </Box>
  );
};

const Loading = () => {
  return (
    <Box
      sx={{ width: "100vw", minHeight: "100vh" }}
      bg="canvas.default"
      display={"flex"}
      flexDirection={"column"}
      flex={1}
      height={"100%"}
    >
      <Box
        display={"flex"}
        flex={1}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Spinner size={"large"} />
      </Box>
    </Box>
  );
};

export default App;
