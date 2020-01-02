import React, { useContext } from "react";
import GetCards from "./components/GetCards/GetCards";
import { UserProvider } from "./stateManagement/userContext";
import { Provider as AuthProvider } from "./stateManagement/AuthContext";
import { Context as AuthContext } from "./stateManagement/AuthContext";
// import ToolBar from "./components/ToolBar/ToolBar";
// import SideDrawer from "./components/SideDrawer/SideDrawer";
// import BackDrop from "./components/BackDrop/BackDrop";

const DashBoard = props => {
  const { signout } = useContext(AuthContext);

  const handleLogout = () => {
    signout().then(() => {
      props.history.push("/signin");
    });
  };
  return (
    <AuthProvider>
      <UserProvider>
        <div
          style={{
            height: "100%"
          }}
        >
          <button onClick={handleLogout}>Logout</button>
          <main
            style={{
              marginTop: "64px"
            }}
          >
            <GetCards />
          </main>
        </div>
      </UserProvider>
    </AuthProvider>
  );
};
export default DashBoard;
