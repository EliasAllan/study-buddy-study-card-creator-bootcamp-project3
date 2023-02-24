import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      decks {
        _id
        deckTitle
        createdAt
      }
    }
  }
`;

export const QUERY_DECKS = gql`
  query getDecks {
    decks {
      _id
      deckTitle
      deckAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_DECK = gql`
  query getSingleDeck($deckId: ID!) {
    deck(deckId: $deckId) {
      _id
      deckTitle
      deckAuthor
      createdAt
      cards {
        _id
        cardText
        cardAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      decks {
        _id
        deckTitle
        deckAuthor
        createdAt
      }
    }
  }
`;
