import React, { Component } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import styled from "styled-components";

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
		displayMobileNavBar: false
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
	render() {
		console.log(this.props);
		return (
			<MyNavBar>
				<DesktopNavbar
					history={this.props.history}
					displayMobileNavBar={this.state.displayMobileNavBar}
					toggleMobileNavBar={this.toggleMobileNavBar}
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
