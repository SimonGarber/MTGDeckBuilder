import React, { createContext, Component } from "react";

// Context creation for managing UI toggles
// to show or not show cards based on what format they are legal in

export const FormatLegalityContext = createContext({
	ismodern: false,
	iscommander: false,
	islegacy: false,
	isvintage: false,
	isPioneer: false,
	isStandard: false,
	isOldSchool: false,
	updateIsOldSchool: () => {},
	updateIsStandard: () => {},
	updateIsPioneer: () => {},
	updateIsCommander: () => {},
	updateIsVintage: () => {},
	updateIsLegacy: () => {},
	updateIsModern: () => {}
});

export class FormatLegalityProvider extends Component {
	constructor(props) {
		super(props);
		this.updateIsCommander = () => {
			if (this.state.iscommander) {
				this.setState({ iscommander: false });
			} else {
				this.setState({ iscommander: true });
			}
		};
		this.updateIsOldSchool = () => {
			if (this.state.isOldSchool) {
				this.setState({ isOldSchool: false });
			} else {
				this.setState({ isOldSchool: true });
			}
		};
		this.updateIsPioneer = () => {
			if (this.state.isPioneer) {
				this.setState({ isPioneer: false });
			} else {
				this.setState({ isPioneer: true });
			}
		};
		this.updateIsStandard = () => {
			if (this.state.standard) {
				this.setState({ isStandard: false });
			} else {
				this.setState({ isStandard: true });
			}
		};
		this.updateIsLegacy = () => {
			if (this.state.islegacy) {
				this.setState({ islegacy: false });
			} else {
				this.setState({ islegacy: true });
			}
		};
		this.updateIsVintage = () => {
			if (this.state.isvintage) {
				this.setState({ isvintage: false });
			} else {
				this.setState({ isvintage: true });
			}
		};
		this.updateIsModern = () => {
			if (this.state.ismodern) {
				this.setState({ ismodern: false });
			} else {
				this.setState({ ismodern: true });
			}
		};

		this.state = {
			ismodern: false,
			iscommander: false,
			isvintage: false,
			islegacy: false,
			updateIsModern: this.updateIsModern,
			updateIsCommander: this.updateIsCommander,
			updateIsLegacy: this.updateIsLegacy,
			updateIsVintage: this.updateIsVintage
		};
	}
	render() {
		return (
			<FormatLegalityContext.Provider value={this.state}>
				{this.props.children}
			</FormatLegalityContext.Provider>
		);
	}
}

export const FormatLegalityConsumer = FormatLegalityContext.Consumer;
