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
import { User, useAuth0 } from "@auth0/auth0-react";
import DefaultAvatar1 from "../../assets/default-avatar-1.png";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { darkModeState } from "../../recoil/atoms";

const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      {isAuthenticated && user ? (
        <AuthenticatedNavbar user={user} />
      ) : (
        <UnauthenticatedNavbar />
      )}
    </>
  );
};

const AuthenticatedNavbar = ({ user }: { user: User }) => {
  const navigate = useNavigate();
  const { logout } = useAuth0();
  const setDarkMode = useSetRecoilState(darkModeState);

  return (
    <Header>
      <Header.Item>
        <Header.Link
          href="#"
          sx={{ fontSize: 2, gap: 3 }}
          onClick={() => {
            navigate("/");
          }}
        >
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
        <Header.Link
          href="#"
          sx={{ fontSize: 2, gap: 3 }}
          onClick={() => {
            // toggle dark mode
            setDarkMode((darkMode) => !darkMode);
          }}
        >
          <img src={Digisight} alt="Digisight" width="30" height="30" />
        </Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link href="#" sx={{ mr: 0, fontSize: 2, gap: 3 }}>
          <ActionMenu>
            <ActionMenu.Button>
              <Avatar
                src={user.picture ?? DefaultAvatar1}
                size={20}
                square
                alt="avatar"
              />
            </ActionMenu.Button>

            <ActionMenu.Overlay>
              <ActionList>
                <ActionList.Item>Edit Profile</ActionList.Item>
                <ActionList.Divider />
                <ActionList.Item
                  variant="danger"
                  onClick={() => {
                    logout();
                  }}
                >
                  Sign Out
                </ActionList.Item>
              </ActionList>
            </ActionMenu.Overlay>
          </ActionMenu>
        </Header.Link>
      </Header.Item>
    </Header>
  );
};

const UnauthenticatedNavbar = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  return (
    <Header>
      <Header.Item full>
        <Header.Link
          href="#"
          sx={{ fontSize: 2, gap: 3 }}
          onClick={() => {
            navigate("/");
          }}
        >
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
      <Header.Item>
        <Header.Link
          href="#"
          sx={{ mr: 0, fontSize: 2, gap: 3 }}
          onClick={() => loginWithRedirect()}
        >
          <Text>Sign In</Text>
        </Header.Link>
      </Header.Item>
    </Header>
  );
};

export default Navbar;
