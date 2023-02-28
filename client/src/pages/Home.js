import React from 'react';
import { useQuery } from '@apollo/client';

import DeckList from '../components/DeckList';
// import DeckForm from '../components/DeckForm';

import { QUERY_DECKS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_DECKS);
  const decks = data?.decks || [];
  console.log(data)
  return (
    <main>
      <div  className="flex-row justify-center">
        <div
          id="deck-container"
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
         {loading ? (
            <div>Loading...</div>
          ) : (
            <DeckList
            title="Subjects other users studied recently ..."
            decks={decks}
            />
          )}
        </div>
        <div className="col-12 col-md-8 mb-3">
        </div>
      </div>
    </main>
  );
};

export default Home;
