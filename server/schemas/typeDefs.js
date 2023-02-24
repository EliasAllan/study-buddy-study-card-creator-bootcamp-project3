const { gql } = require('apollo-server-express');

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
    deckText: String
    deckAuthor: String
    createdAt: String
    cards: [Card]!
  }

  type Card {
    _id: ID
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
    addDeck(deckText: String!): Deck
    addCard(deckId: ID!, cardText: String!): Deck
    removeDeck(deckId: ID!): Deck
    removeCard(deckId: ID!, cardId: ID!): Deck
  }
`;

module.exports = typeDefs;
