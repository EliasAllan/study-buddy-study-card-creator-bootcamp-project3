import React from 'react';
import DeckForm from '../components/DeckForm';
import DeckList from '../components/DeckList';

const Delete = () => {
  
    return (
      <main>
        <div className="flex-row justify-center mb-3">
            <h2 className="col-12 col-md-10 bg-info text-light p-3 mb-5">
           Your card has been removed from the deck
            </h2>
            <div
                className="col-12 col-md-10 mb-3 p-3"
                style={{ border: '1px dotted #1a1a1a' }}
            >
                <DeckForm />
            </div>
        </div>
      </main>
    );
  };
  
  export default Delete;
  