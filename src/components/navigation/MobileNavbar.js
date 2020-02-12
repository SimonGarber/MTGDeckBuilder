import React, { useContext } from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import Portal from "../Portal/Portal";
import { Context as AuthContext } from "../../stateManagement/AuthContext";

const MyMobileNavBar = styled.nav`
	position: fixed;
	top: 15vh;
	width: 50vw;
	background: ${props => props.theme.primary};
	height: 60vh;
	margin-bottom: 15px;
	box-shadow: -10px 10px 5px ${props => props.theme.accent};
	align-self: flex-end;
	z-index: 4;
	transition: transform 1s;
	transform: translateX(
		${props => (props.displayMobileNavBar ? "100%" : "calc(200% + 15px)")}
	);

	.nav-links {
		display: flex;
		flex-flow: column;
		align-items: center;
		list-style: none;
	}
	.nav-links li {
		height: 15vh;
	}

	.link {
		color: white;
		font-size: 2.5vh;
		text-decoration: none;
	}
`;
const MobileNavbar = props => {
	const { state, signout } = useContext(AuthContext);
	console.log(signout);
	return (
		<Portal>
			<MyMobileNavBar
				history={props.history}
				displayMobileNavBar={props.displayMobileNavBar}
				signout={signout}
			>
				<NavLinks isMobileLink={true} state={state} history={props.history} />
			</MyMobileNavBar>
		</Portal>
	);
};

export default MobileNavbar;
