import React, { useContext } from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import mobileNavIcon from "../../images/align-justify-duotone.svg";
import { Context as AuthContext } from "../../stateManagement/AuthContext";

const MyDesktopNavbar = styled.nav`
	position: fixed;
	width: 100vw;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-evenly;
	align-items: center;
	z-index: 2;

	background: ${props => props.theme.primary};
	color: white;

	height: 15vh;

	box-shadow: 0 10px 5px ${props => props.theme.accent};

	.logo {
		font-size: 7vh;
		font-weight: bold;
		text-shadow: 3px 3px 3px ${props => props.theme.accent};
	}
	.logo p {
		font-size: 3vh;
		font-weight: bold;
	}

	.nav-links {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-evenly;
		align-items: center;
		width: 35vw;
		list-style: none;

		@media screen and (max-width: 768px) {
			display: none;
		}
	}

	.link {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		height: 15vh;
		color: white;
		font-size: 1.5vh;
		text-decoration: none;
		border-radius: 10px;
		&:focus {
			background: rgba(0, 0, 0, 0.1);
			outline: none;
		}
		&::after {
			content: "";
			height: 2px;
			width: 0;
			background: ${props => props.theme.accent};
			display: block;
			transition: width 0.5s ease-in-out;
		}
		&:hover::after {
			width: 125%;
		}
	}
`;

const MyMobileNavButton = styled.button`
	background: transparent;
	height: 3vh;
	width: 3vh;
	border: none;
	display: none;

	transition: transform 1s;
	transform: rotate(
		${props => (props.displayMobileNavBar ? "180deg" : "0deg")}
	);
	&:focus {
		outline: none;
	}

	@media screen and (max-width: 768px) {
		display: block;
	}
`;
const DesktopNavbar = props => {
	const { state, signout } = useContext(AuthContext);
	console.log(props);
	return (
		<MyDesktopNavbar>
			<div className='logo'>
				MTG
				<p>DeckBuilder</p>
			</div>
			{props.backdrop}
			<NavLinks signout={signout} state={state} history={props.history} />

			<MyMobileNavButton
				displayMobileNavBar={props.displayMobileNavBar}
				onClick={props.toggleMobileNavBar}
			>
				<img src={mobileNavIcon} alt='Nav Icon' />
			</MyMobileNavButton>
		</MyDesktopNavbar>
	);
};

export default DesktopNavbar;
