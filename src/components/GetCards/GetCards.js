import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { Context as userCardsContext } from "../../stateManagement/userCardsContext";
import { Context as AuthContext } from "../../stateManagement/AuthContext";
import { Context as SearchCardsContext } from "../../stateManagement/searchCardsContext";
import NewForm from "../Form/Form";
import SearchCard from "../SearchCard/SearchCard";
// import SearchForm from "../SearchForm/SearchForm";
import "../../index.scss";
import { Grid } from "semantic-ui-react";

const GetCards = () => {
	const { state } = useContext(AuthContext);
	const userCards = useContext(userCardsContext);
	const searchCards = useContext(SearchCardsContext);

	const handleAddCard = async (state, card) => {
		const { userId } = state;

		await userCards.addCard(userId, card);
		userCards.getCards(state);
	};

	const Mobile = ({ children }) => {
		const isMobile = useMediaQuery({ maxWidth: 767 });
		return isMobile ? children : null;
	};
	const Default = ({ children }) => {
		const isNotMobile = useMediaQuery({ minWidth: 768 });
		return isNotMobile ? children : null;
	};

	return (
		<div>
			<div
				style={{
					display: "inlineBlock"
				}}
			>
				<NewForm />
			</div>

			{searchCards.state.cards.length > 0 && (
				<>
					<Grid.Column
						key={Math.floor(Math.random())}
						cards={searchCards.state.cards}
						style={{
							display: "flex",
							justifyContent: "center",
							flexDirection: "row",
							flexWrap: "wrap"
						}}
					>
						<Default>
							{searchCards.state.cards.map((card, index) => {
								return (
									<Grid.Row key={card.id}>
										<SearchCard
											key={index}
											imageSize={"normal"}
											card={card}
											handleAddCard={handleAddCard}
											state={state}
											imageWidth={null}
										/>
									</Grid.Row>
								);
							})}
						</Default>

						<Mobile>
							{searchCards.state.cards.map((card, index) => {
								return (
									<Grid.Row key={card.id}>
										<SearchCard
											key={index}
											imageSize={"small"}
											card={card}
											handleAddCard={handleAddCard}
											state={state}
											imageWidth={null}
										/>
									</Grid.Row>
								);
							})}
						</Mobile>
					</Grid.Column>
				</>
			)}
		</div>
	);
};

export default GetCards;
