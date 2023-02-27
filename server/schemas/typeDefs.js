const { gql } = require('apollo-server-express');

// Once the form for new deck creation is ready to capture deckDescription the mutation for addDeck on line 47 should read:
// addDeck(deckTitle: String!, deckDescription: String!): Deck

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    decks: [Deck]!
  }

  type Deck {
    _id: ID
    deckTitle: String
    deckDescription: String
    deckAuthor: String
    createdAt: String
    cards: [Card]!
  }

  type Card {
    cardId: ID
    cardText: String
    cardAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    decks(username: String): [Deck]
    deck(deckId: ID!): Deck
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addDeck(deckTitle: String!, deckDescription: String!): Deck
    addCard(deckId: ID!, cardText: String!): Deck
    removeDeck(deckId: ID!): Deck
    removeCard(deckId: ID!, cardId: ID!): Deck
  }
`;

module.exports = typeDefs;
