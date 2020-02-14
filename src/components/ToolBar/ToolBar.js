import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { Context as SearchCardsContext } from "../../stateManagement/searchCardsContext";
import { Context as AuthContext } from "../../stateManagement/AuthContext";
import NavBar from "../NavBar/Nav";
import "./ToolBar.css";
import "../SideDrawer/DrawerToggleButton";

const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 992 });
	return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
	return isTablet ? children : null;
};
const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return isMobile ? children : null;
};
const Default = ({ children }) => {
	const isNotMobile = useMediaQuery({ minWidth: 768 });
	return isNotMobile ? children : null;
};

const ToolBar = () => {
	const { state, signout } = useContext(AuthContext);
	const searchCards = useContext(SearchCardsContext);
	const handleLogout = async () => {
		await signout();
	};
	const handleReset = async () => {
		const emptyCards = [];
		await searchCards.resetSearch(emptyCards);
	};

	return (
		<>
			<Default>
				<NavBar
					state={state}
					searchCards={searchCards}
					handleReset={handleReset}
					handleLogout={handleLogout}
				/>
			</Default>
			<Desktop>
				<NavBar
					state={state}
					searchCards={searchCards}
					handleReset={handleReset}
					handleLogout={handleLogout}
				/>
			</Desktop>
			<Mobile>
				<NavBar
					state={state}
					searchCards={searchCards}
					handleReset={handleReset}
					handleLogout={handleLogout}
				/>
			</Mobile>
			<Tablet>
				<NavBar
					state={state}
					searchCards={searchCards}
					handleReset={handleReset}
					handleLogout={handleLogout}
				/>
			</Tablet>
		</>
	);
};
export default ToolBar;
