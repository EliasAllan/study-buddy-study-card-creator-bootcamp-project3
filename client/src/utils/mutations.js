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
  mutation addDeck($deckText: String!) {
    addDeck(deckText: $deckText) {
      _id
      deckText
      deckAuthor
      createdAt
      cards {
        _id
        cardText
      }
    }
  }
`;

export const ADD_CARD = gql`
  mutation addCard($deckId: ID!, $cardText: String!) {
    addCard(deckId: $deckId, cardText: $cardText) {
      _id
      deckText
      deckAuthor
      createdAt
      cards {
        _id
        cardText
        createdAt
      }
    }
  }
`;
