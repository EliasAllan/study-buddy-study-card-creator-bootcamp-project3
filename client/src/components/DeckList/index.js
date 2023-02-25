import React from 'react';
import { Link } from 'react-router-dom';
import "./deckList.css";
const DeckList = ({
  decks, // this will be changed to decks later
  title,    // we will also need a description and a card object to be passed
  showTitle = true,
  showUsername = true,
}) => {
  if (!decks.length) {
    return <h3>You haven't created any cards yet</h3>;
  }

  return (
    <div >
      {/* new code to put the decks on rows
      <div className="container my-4">
       <div className="row"> */}
      {showTitle && <h3 id="center">{title}</h3>}
      {decks &&
        decks.map((deck) => (
        <div key={deck._id} className="card mb-3" >
        {/* new code to put the decks on rows
        <div key={deck._id} className="card col-lg-4 mb-3" > */}
            <h4 className="card-header bg-info text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${deck.deckAuthor}`}
                >
                  {deck.deckAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
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
              <h4>This will be the deck description</h4>
            </div>
            {/* Link to the listed deck. Commenting this out in the main DeckList to prevent access to other users' decks from the homepage */}
            {/* <Link
              className="btn btn-info btn-block btn-squared"
              to={`/decks/${deck._id}`}
            >
              Click here to see the deck
            </Link> */}
          </div>
        ))}
        {/* </div> */}
    </div>
  );
};

export default DeckList;
