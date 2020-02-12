import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Context as userCardsContext } from "../../stateManagement/userCardsContext";
import { Context as AuthContext } from "../../stateManagement/AuthContext";
import "./Cards.css";

const UserCardList = props => {
	const userCards = useContext(userCardsContext);
	const { state } = useContext(AuthContext);

	useEffect(() => {
		userCards.getCards(state);
	}, []);
	return (
		<React.Fragment>
			{userCards.state.cards.map(card => {
				return (
					<Grid.Column className='userCardList'>
						<Grid.Row className='userCardsRow'>
							<div>
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
							</div>
							<div>
								<h3
									onClick={() => {
										userCards.removeCard({ state, card });
									}}
								>
									Delete
								</h3>
							</div>
						</Grid.Row>
					</Grid.Column>
				);
			})}
		</React.Fragment>
	);
};
export default UserCardList;
