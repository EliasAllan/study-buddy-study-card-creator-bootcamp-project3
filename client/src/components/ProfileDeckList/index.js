import React from 'react';
import { Link } from 'react-router-dom';
import "./profileDeckList.css";

const ProfileDeckList = ({
  decks,
  title,
  showTitle = true,
  showUsername = true,
}) => 
{
  if (!decks.length) {
    return <h3>You haven't created any decks yet</h3>
  }

  return (
    <div className="card-container" >
      {showTitle && <h3 id="center">{title}</h3>}
      {decks &&
        decks.map((deck) => (
          <div key={deck._id} id="deck" className="deck card mb-3" style={({ width: "19rem"})} >
            <h4 id="deck-header" className="deck card-header bg-info ">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${deck.deckAuthor}`}
                >
                  {deck.deckAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    You created this deck on {deck.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You created this deck on {deck.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body p-2" style={({ height:"120px"})} >
              <h3 id="center">{deck.deckTitle}</h3>
              <h4 id="">{deck.deckDescription}</h4>
            </div>
            <Link
              id="deck-footer"
              className="btn btn-info btn-block "
              to={`/decks/${deck._id}`}
            >
              Click here to see and/or edit the deck.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ProfileDeckList;