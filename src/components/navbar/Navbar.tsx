import {
  Header,
  Avatar,
  Text,
  ActionList,
  ActionMenu,
  Box,
} from "@primer/react";
import Digisight from "../../assets/digisight-lighter.svg";
import { AiFillSetting, AiFillSwitcher } from "react-icons/ai";

const Navbar = () => {
  return (
    <Header>
      <Header.Item>
        <Header.Link href="#" sx={{ fontSize: 2, gap: 3 }}>
          <img
            src={Digisight}
            style={{ color: "red" }}
            alt="Digisight"
            width="30"
            height="30"
          />
          <Text>Digisight</Text>
        </Header.Link>
      </Header.Item>
      <Header.Item full>
        <ActionMenu>
          <ActionMenu.Button>Your-Project-Name</ActionMenu.Button>

          <ActionMenu.Overlay>
            <ActionList>
              <ActionList.Item>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <AiFillSetting />
                  Settings
                </Box>
              </ActionList.Item>
              <ActionList.Item>
                {" "}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <AiFillSwitcher />
                  Switch Project
                </Box>
              </ActionList.Item>
              <ActionList.Divider />
              <ActionList.Item variant="danger">Delete Project</ActionList.Item>
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>
      </Header.Item>
      <Header.Item>
        <Header.Link href="#" sx={{ mr: 0, fontSize: 2, gap: 3 }}>
          <Text>Sign In</Text>
          <Avatar
            src="https://github.com/octocat.png"
            size={20}
            square
            alt="@octocat"
          />
        </Header.Link>
      </Header.Item>
    </Header>
  );
};

export default Navbar;
