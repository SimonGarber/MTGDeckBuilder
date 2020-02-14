import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import styled from "styled-components";
import { Context as userCardsContext } from "../../stateManagement/userCardsContext";
import { Context as AuthContext } from "../../stateManagement/AuthContext";
import "./Cards.css";

const DeleteButton = styled.button`
	height: 100%;
	background-color: blue;
	color: white;
	width: 4rem;
	border-radius: 5px;
	&:hover {
		background-color: red;
		opacity: 0.7;
	}
`;

const CardsContainer = styled.div`
	display: grid;
	padding: 1rem;
	margin: 1rem;
`;
const CardWrapper = styled.div`
	display: block;
`;
const UserCardList = props => {
	const userCards = useContext(userCardsContext);
	const { state } = useContext(AuthContext);

	useEffect(() => {
		userCards.getCards(state);
	}, []);
	return (
		<CardsContainer>
			{userCards.state.cards.map(card => {
				return (
					<Grid.Column className='userCardList'>
						<CardWrapper>
							<Grid.Row className='userCardsRow'>
								<h2
									key={card.id}
									onClick={() => {
										userCards.getCard(card).then(() => {
											props.history.push(`cards/${card.id}`);
										});
									}}
								>
									{card.name}
								</h2>

								<DeleteButton
									onClick={() => {
										userCards.removeCard({ state, card });
									}}
								>
									Delete
								</DeleteButton>
							</Grid.Row>
						</CardWrapper>
					</Grid.Column>
				);
			})}
		</CardsContainer>
	);
};
export default UserCardList;
