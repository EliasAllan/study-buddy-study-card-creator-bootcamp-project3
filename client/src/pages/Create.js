import React from 'react';
import DeckForm from '../components/DeckForm';

const Create = () => {
  
    return (
      <main>
        <div className="flex-row justify-center mb-3">
            <h2 id="create-deck-text" className="col-12 col-md-10 bg-info text-light p-3 mb-5">
            Create a new deck
            </h2>
            <div
          
                className="form-div ol-12 col-md-10 mb-3 p-3"
                style={{ border: '1px dotted #1a1a1a' }}
            >
                <DeckForm />
            </div>
        </div>
      </main>
    );
  };
  
  export default Create;
  