import React from 'react';
import { Link } from 'react-router-dom';
import "./thoughtList.css";
const ThoughtList = ({
  thoughts, // this will be changed to decks later
  title,    // we will also need a description and a card object to be passed
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3>You haven't created any cards yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3" >
            <h4 className="card-header bg-info text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${thought.thoughtAuthor}`}
                >
                  {thought.thoughtAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    created this deck on {thought.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    created this deck on {thought.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body p-2 " >
              <h3>{thought.thoughtText}</h3>
            </div>
            <Link
              className="btn btn-info btn-block btn-squared"
              to={`/thoughts/${thought._id}`}
            >
              Click here to see the deck
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
