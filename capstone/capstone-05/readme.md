schema per model

User: { id, username, password }

Deck: { id, userId, name }

Card: { id, deckId, question, answer }

CRUD plan:

Users → create, login, logout

Decks → create, read, update, delete

Cards → create, read, update, delete
