import React from 'react';

const CardList = ({ cards = [] }) => {
  if (!cards.length) {
    return <h3>No Cards Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5"
        style={{ border: '1px dotted #1a1a1a' }}
      >
        The cards will be the cards later, and they will go inside the decks box
      </h3>
      <div className="flex-row my-4">
        {cards &&
          cards.map((card) => (
            <div key={card._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {card.cardAuthor} carded{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {card.createdAt}
                  </span>
                </h5>
                <p className="card-body ">{card.cardText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CardList;
