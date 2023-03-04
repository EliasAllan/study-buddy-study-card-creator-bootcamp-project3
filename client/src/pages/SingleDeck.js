import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CardList from '../components/CardList';
import CardForm from '../components/CardForm';

import { QUERY_SINGLE_DECK } from '../utils/queries';

const SingleDeck = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { deckId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_DECK, {
    // pass URL parameter
    variables: { deckId: deckId },
  });

  const deck = data?.deck || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 id="deck-header" className="bg-info text-light p-2 m-0">
        <h2>{deck.deckTitle}</h2>
        
        <span style={{ fontSize: '1rem' }}>
        You created this deck on {deck.createdAt}.
        </span>
      </h3>
      <div className="py-4">
      <div className="my-5">
        <CardList cards={deck.cards} deckId={deck._id} />
      </div>
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CardForm deckId={deck._id} deckAuthor={deck.deckAuthor}/>
      </div>
    </div>
  );
};

export default SingleDeck;
