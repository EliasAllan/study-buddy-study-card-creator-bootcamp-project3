import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_DECK } from '../../utils/mutations';
import { QUERY_DECKS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const DeckForm = () => {
  const [deckTitle, setDeckTitle] = useState('');

  // Gonna need this for setting the description - just scoping requirements at the moment.
  // const [deckDescription, setDeckDescription] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addDeck, { error }] = useMutation(ADD_DECK, {
    update(cache, { data: { addDeck } }) {
      try {
        const { decks } = cache.readQuery({ query: QUERY_DECKS });

        cache.writeQuery({
          query: QUERY_DECKS,
          data: { decks: [addDeck, ...decks] },
        });
      } catch (e) {
        console.error(e);
      }

      //update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, decks: [...me.decks, addDeck] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addDeck({
        variables: {
          deckTitle,
          deckAuthor: Auth.getProfile().data.username,
        },
      });

      setDeckTitle('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'deckTitle' && value.length <= 280) {
      setDeckTitle(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>What's the study topic for your new deck?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            {/* This textarea captures the new deck's title. */}
            <div className="col-12 col-lg-9">
              <textarea
                name="deckTitle"
                placeholder="My new deck's title is.."
                value={deckTitle}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>
            {/* This textarea is going to capture the new deck's description but doesn't work yet. */}
            <div className="col-12 col-lg-9">
              <textarea
                name="deckDescription"
                placeholder="A brief description of this deck would be.. (not in use yet)"
                // value={deckDescription}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-info btn-block py-3" type="submit">
                Add Deck
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your decks. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default DeckForm;
