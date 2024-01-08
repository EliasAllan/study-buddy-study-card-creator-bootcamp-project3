import { useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import Media from "react-media";

import DeckList from "../components/DeckList";
// import DeckForm from '../components/DeckForm';

import { QUERY_DECKS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_DECKS);
  const decks = data?.decks || [];
  console.log(data);
  return (
    <div>
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && (
              <>
                <main>
                  <div id="deck-container-small">
                    {loading ? (
                      <div>Loading...</div>
                    ) : (
                      <DeckList
                        title="Recent Decks"
                        decks={decks}
                      />
                    )}
                  </div>
                </main>
              </>
            )}
            {matches.medium && <></>}
            {matches.large && (
              <>
                <main>
                  <div id="deck-container-large">
                    {loading ? (
                      <div>Loading...</div>
                    ) : (
                      <DeckList
                        title="Recent Decks"
                        decks={decks}
                      />
                    )}
                  </div>
                </main>
              </>
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
};

export default Home;
