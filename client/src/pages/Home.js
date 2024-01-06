import React from "react";
import { useQuery } from "@apollo/client";

import DeckList from "../components/DeckList";
// import DeckForm from '../components/DeckForm';

import { QUERY_DECKS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_DECKS);
  const decks = data?.decks || [];
  console.log(data);
  return (
    <main>
        <div id="deck-container">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <DeckList
              title="Subjects other users studied recently ..."
              decks={decks}
            />
          )}
        </div>
    </main>
  );
};

export default Home;
