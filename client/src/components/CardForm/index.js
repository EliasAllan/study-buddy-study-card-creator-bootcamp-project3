import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_CARD } from '../../utils/mutations';

import Auth from '../../utils/auth';

const CardForm = ({ deckId, cardAuthor }) => {
  const [cardText, setCardText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addCard, { error }] = useMutation(ADD_CARD);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addCard({
        variables: {
          deckId,
          cardText,
          cardAuthor: Auth.getProfile().data.username,
        },
      });

      setCardText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'cardText' && value.length <= 280) {
      setCardText(value);
      setCharacterCount(value.length);
    }
  };
  
    // if (Auth.loggedIn() && Auth.getProfile().data.username === cardAuthor) {
  return (
    <div>
      <h4>Create a new card</h4>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="cardText"
                placeholder="Add the contents of your study card ..."
                value={cardText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-info btn-block py-3" type="submit">
                Add Card
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your decks. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  )
}
// };
// };

export default CardForm;
