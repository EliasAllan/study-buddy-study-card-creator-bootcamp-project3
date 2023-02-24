import React from 'react';
import DeckForm from '../components/DeckForm';
import DeckList from '../components/DeckList';

const Create = () => {
  
    return (
      <main>
        <div className="flex-row justify-center mb-3">
            <h2 className="col-12 col-md-10 bg-info text-light p-3 mb-5">
            Create a new deck
            </h2>
            <div
                className="col-12 col-md-10 mb-3 p-3"
                style={{ border: '1px dotted #1a1a1a' }}
            >
                <DeckForm />
            </div>
            {/* <h2 className="col-12 col-md-10 bg-info text-light p-3 mb-5">
            Create a new list of decks.
            </h2> */}
            {/* <div
                className="col-12 col-md-10 mb-3 p-3"
                style={{ border: '1px dotted #1a1a1a' }}
            >
                <DeckList />
            </div> */}
        </div>
      </main>
    );
  };
  
  export default Create;
  