import React from 'react';
import { Link } from 'react-router-dom';
import "./deckList.css";

const DeckList = ({
  decks, // this will be changed to decks later
  title,    // we will also need a description and a card object to be passed
  showTitle = true,
  showUsername = true,
}) => 
{
  if (!decks.length) {
    return <h3>You haven't created any cards yet</h3>;
  }

  return (
    <div name="container">
      <div className="row">
      {showTitle && <h3 id="center">{title}</h3>}
      {decks &&
        decks.map((deck) => (
        <div key={deck._id} className="card mb-3" id="card-1" >
            <h4 className="card-header bg-info text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/decks/${deck._id}`}
                >
                  {deck.deckAuthor} <br />
                  <span style={{ fontSize: '1rem'}}>
                    created this deck on {deck.createdAt}
                  </span>
                </Link>
                
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    created this deck on {deck.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body p-2 " >
              <h3>{deck.deckTitle}</h3>
              <h4>{deck.deckDescription}</h4>
            </div>
            {/* <Link
              id="deck-footer"
              className="btn btn-info btn-block "
              to={`/decks/${deck._id}`}
            >
              Click here to see and/or edit the deck.
            </Link> */}
          </div>
        ))}
        </div>
      </div>
  );
};

export default DeckList;