import React, { Component } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import styled from "styled-components";
import BackDrop from "../BackDrop/BackDrop";
const MyNavBar = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	overflow: hidden;
	z-index: 3;
	height: 24vh;
`;
class Nav extends Component {
	state = {
		displayMobileNavBar: false,
		displayBackDrop: false
	};

	componentDidMount = () => {
		window.addEventListener("resize", this.checkAndAutoHideMobileNavBar);
	};

	componentWillUnmount = () => {
		window.removeEventListener("resize", this.checkAndAutoHideMobileNavBar);
	};
	toggleMobileNavBar = () => {
		this.setState(prevState => {
			return { displayMobileNavBar: !prevState.displayMobileNavBar };
		});
	};

	checkAndAutoHideMobileNavBar = () => {
		const screenWidth = window.innerWidth;
		if (this.state.displayMobileNavBar && screenWidth > 768) {
			this.setState({ displayMobileNavBar: false });
		}
	};
	backDropClickHandler = () => {
		this.setState({ displayMobileNavBar: false });
	};
	render() {
		let backdrop;

		if (this.state.displayMobileNavBar) {
			backdrop = <BackDrop click={this.backDropClickHandler} />;
		}
		return (
			<MyNavBar>
				<DesktopNavbar
					history={this.props.history}
					displayMobileNavBar={this.state.displayMobileNavBar}
					toggleMobileNavBar={this.toggleMobileNavBar}
					backdrop={backdrop}
				/>

				<MobileNavbar
					history={this.props.history}
					displayMobileNavBar={this.state.displayMobileNavBar}
				/>
			</MyNavBar>
		);
	}
}

export default Nav;
