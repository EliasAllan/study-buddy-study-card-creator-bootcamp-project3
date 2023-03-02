import React from "react";
import {useNavigate } from "react-router-dom";
import "./cardList.css";
import { useMutation } from '@apollo/client';
import { REMOVE_CARD } from '../../utils/mutations';
import DeckForm from "../DeckForm";

const CardList = ({ cards = [], deckId }) => {
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const navigate = useNavigate();
  const [removeCard, { error }] = useMutation(REMOVE_CARD);
  if (!cards.length) {
    return <h3 id="center">No Cards Yet</h3>;
  };

  const handleDeleteCard = async (event) => {
    event.preventDefault();

    try {
      console.log(event.target.value)
      const { data } = await removeCard({
        variables: {
          deckId,
          cardId:event.target.value
        },
      });
      navigate('/delete');
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <>
      <div className="container">
        <div className="row">
        {cards &&
          cards.map((card) => (
            <div key={card.cardId} className="col-sm-4 mb-3">
              <div id="study-card" className=" bg-info text-light">
                <button className="del-btn btn btn-lg btn-info m-2" value={card.cardId} onClick={handleDeleteCard}>
                <div className="icon bg-info">
                <i class="fa-solid fa-trash-can"></i>
               </div> 
                </button>

                <h2 id="card-content" className="flex-column">{card.cardText}</h2>
                
              </div>
            </div>
          ))}
          </div>
      </div>

    </>
  );
};

export default CardList;
