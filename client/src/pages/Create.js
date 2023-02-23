import React from 'react';
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

const Create = () => {
  
    return (
      <main>
        <div className="flex-row justify-center mb-3">
            <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
            Create a new thought.
            </h2>
            <div
                className="col-12 col-md-10 mb-3 p-3"
                style={{ border: '1px dotted #1a1a1a' }}
            >
                <ThoughtForm />
            </div>
            <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
            Create a new list of thoughts.
            </h2>
            <div
                className="col-12 col-md-10 mb-3 p-3"
                style={{ border: '1px dotted #1a1a1a' }}
            >
                {/* <ThoughtList /> */}
            </div>
        </div>
      </main>
    );
  };
  
  export default Create;
  