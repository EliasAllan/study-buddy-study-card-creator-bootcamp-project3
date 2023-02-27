import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_DECK = gql`
  mutation addDeck($deckTitle: String!, $deckDescription: String!) {
    addDeck(deckTitle: $deckTitle, deckDescription: $deckDescription) {
      _id
      deckTitle
      deckDescription
      deckAuthor
      createdAt
      cards {
        cardId
        cardText
      }
    }
  }
`;

export const ADD_CARD = gql`
  mutation addCard($deckId: ID!, $cardText: String!) {
    addCard(deckId: $deckId, cardText: $cardText) {
      _id
      deckTitle
      deckAuthor
      createdAt
      cards {
        cardId
        cardText
        createdAt
      }
    }
  }
`;


export const REMOVE_CARD = gql`
  mutation removeCard($deckId: ID!, $cardId: ID!) {
    removeCard(deckId: $deckId, cardId: $cardId) {
      _id
      deckTitle
      deckAuthor
      createdAt
      cards {
        cardId
      }
    }
  }`