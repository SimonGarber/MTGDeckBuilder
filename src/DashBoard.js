import React, { useContext, useState } from "react";

import { UserProvider } from "./stateManagement/userContext";
import { Provider as AuthProvider } from "./stateManagement/AuthContext";
import { Context as AuthContext } from "./stateManagement/AuthContext";
import ToolBar from "./components/ToolBar/ToolBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop";

const DashBoard = props => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const { signout } = useContext(AuthContext);

  const handleLogout = () => {
    signout().then(() => {
      props.history.push("/signin");
    });
  };
  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };
  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };
  let backDrop;
  if (sideDrawerOpen) {
    backDrop = <BackDrop click={backdropClickHandler} />;
  }
  return (
    <AuthProvider>
      <UserProvider>
        <ToolBar
          drawerClickHandler={drawerToggleClickHandler}
          logout={handleLogout}
        />
        <SideDrawer show={sideDrawerOpen} logout={handleLogout} />
        {backDrop}
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <main
            style={{
              marginTop: "64px",
              justifyContent: "center",
              maxWidth: "80%",
              width: "80%",
              position: "absolute",
              height: "100vh",
              minWidth: "40%"
            }}
          ></main>
        </div>
      </UserProvider>
    </AuthProvider>
  );
};
export default DashBoard;
