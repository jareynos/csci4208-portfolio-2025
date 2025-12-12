DATA PERSISTENCE:

MULTIPLE USERS ARE ISOLATED.

the database has atomic writes, which ensures NO DATA CORRUPTION if server were to crash mid-write

When adding cards/decks, if you stop the server and restart it, decks/cards should still EXIST.

multiple users can use it at the same time.
