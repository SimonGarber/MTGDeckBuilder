# MTG DeckBuilder

Author: Simon Garber

## Technology Stack

React.js, Javascript, Seantic-UI, React Hooks, React Context-Api

## Introduction

Welcome to the world of searching large databases for 'Magic: The Gathering' card objects. The client
is built with React.js and connects with an Express API (that repo is called 'MTGDeckBuilder-Api).

This is the front end framework that allows users to authenticate themselves, search the database,
save cards to their collection and remove ones they no longer want. The authentication is performed using Json Web Tokens
and passwords are hashed using bcrypt.

## Front End

MTGDeckBuilder is designed to be a single page application. The routing is handled both on the client-side using 'React-Router' as well as on the server side for authentication purposes and Api requests. Users must create an account in order to use the app (this will later change in future releases to allow for 'search only' functionality). Once a user is authenticated a token is stored locally so that navigating away from the application does not cause a required re-authentication. Once the user logs out succesfully, the token is destroyed and the application is inaccessible until re-authentication.

MTGDeckBuilder has been designed to be responsive for desktop and mobile resolutions/screen sizes. Button location and menu options have been placed to ensure ease of access. Future versions will pay specific attention to accessbility including those with reduced vision as well as one-handed use.

## Back End

### Note

The front end client receives data by making requests to a companion Express API. For more detailed information, please refer to the 'MTGDeckBuilder-API' repository in Github.

### Summary

The database is housed in a MongoDB Cloud atlas cluster. The data is split up into two main collections: cards and users.
The cards collection houses over 50,000 unique data objects spanning the entire 26 history of 'Magic: The Gathering'. The original
data set was downloaded as a bulk data download from 'Scryfall' - an online application and service that hosts it's own card searching tool and API. The image links are sources from 'Scryfall' and conform to the fair usage policy set out by both 'Scryfall' and 'Wizards of the cost' : the owner of the card images.

### Installation

1. NPM install - This will download all of the necessary packages detailed in the JSON package file.
2. NPM Run Start - This script will start the development server on the default port on LocalHost in the browser.

### Screenshots

![screenshot_1](public/images/MTG_DeckBuilder_searchForm-new.png?raw=true "Main Screen")

![screenshot_2](public/images/MTG_DeckBuilder_searchResult-new.png?raw=true "Completed Search")

![screenshot_3](public/images/MTG_DeckBuilder_collection-new.png?raw=true "User Collection")

![screenshot_4](public/images/MTG_DeckBuilder_mobile_sidebar-new.png?raw=true "Mobile Sidebar")

![screenshot_5](public/images/MTG_DeckBuilder_mobile_searchResult-new.png?raw=true "Mobile Search Result")
