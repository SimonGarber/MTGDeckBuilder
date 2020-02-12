import React from "react";
import "../../index.scss";
import { Link, Redirect } from "react-router-dom";

const NavBar = ({ state, searchCards, handleReset, handleLogout }) => {
	return (
		<React.Fragment>
			<header className='toolbar'>
				<nav className='toolbar-navigation'>
					{state.token ? (
						<React.Fragment>
							<div className='toolbar-logo'>
								<label>MTG Deckbuilder</label>
							</div>

							<div className='spacer'></div>
							<div className='toolbar-navigation-items'>
								<ul>
									<li>
										{searchCards.state.cards.length > 0 ? (
											<label onClick={handleReset}>Reset Search</label>
										) : null}
									</li>
									<li>
										<Link to='/search'>Search</Link>
									</li>
									<li>
										<Link to='/cards'>Collection</Link>
									</li>
									<li>
										<label onClick={handleLogout}>Log Out</label>
									</li>
								</ul>
							</div>
						</React.Fragment>
					) : (
						<Redirect to='/signin' />
					)}
				</nav>
			</header>
		</React.Fragment>
	);
};

export default NavBar;
