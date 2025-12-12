Sign in/Register Logout (in the very top right whenever you are logged in, in order to logout.)

Username / Password = Login Choose Username / Choose password = Register

Each Deck will be unqiue to their user, and each deck will have unique cards that that unique user placed in.

Endpoint Method Description

/api/auth/register POST Create user

/api/auth/login POST Log in user

/api/auth/logout POST Log out user

/api/decks GET, POST List/create decks

/api/decks/:id PUT, DELETE Edit/delete deck

/api/decks/:id/cards GET, POST List/add cards

/api/decks/:deckId/cards/:cardId PUT, DELETE Edit/delete card
