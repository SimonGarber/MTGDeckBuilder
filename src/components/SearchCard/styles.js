import styled from "styled-components";
import { Card, Image, Button } from "semantic-ui-react";

export const SearchCard = styled(Card)({
	position: "relative",
	backgroundColor: "white",
	width: "100%",
	height: "90vh",
	justifyContent: "center",
	marginBottom: "10px"
});

export const SearchCardImage = styled(Image)({
	top: "50%",
	position: "absolute",
	transform: `translate(-50%, -50%)`,
	height: "70%"
});

export const SearchCardButton = styled(Button)({
	position: "abolsute",
	backgroundColor: "blue"
});
