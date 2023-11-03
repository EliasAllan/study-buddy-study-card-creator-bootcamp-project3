import React , { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./cardList.css";
import { useMutation } from "@apollo/client";
import { REMOVE_CARD } from "../../utils/mutations";


// import function to register Swiper custom elements
// import { register } from "swiper/element/bundle";
// // register Swiper custom elements
// register();
// couldnt make it work in the project, had to use script in html
const CardList = ({ cards = [], deckId }) => {
  const navigate = useNavigate();
  const [removeCard, { error }] = useMutation(REMOVE_CARD);
  if (!cards.length) {
    return <h3 id="center">No Cards Yet</h3>;
  }

  const handleDeleteCard = async (event) => {
    event.preventDefault();

    try {
      console.log(event.target.value);
      await removeCard({
        variables: {
          deckId,
          cardId: event.target.value,
        },
      });
     
      navigate("/delete");
    } catch (err) {
      console.error(err)
      console.log(error)
    }
  };

  return (

    
    <>
      <swiper-container slides-per-view="1" speed="500" loop="true" >
        {cards &&
          cards.map((card) => (
            <>
              <swiper-slide>
                <div key={card.cardId} className="col-sm h-100 d-inline-block" >
                  <div id="study-card" className=" bg-info text-light">
                    <button
                      className="del-btn btn btn-lg btn-info m-2"
                      value={card.cardId}
                      onClick={handleDeleteCard}
                    >
                      <div className="icon bg-info">
                        <i className="fa-solid fa-trash-can"></i>
                      </div>
                    </button>
                    <h2 id="card-content" className="flex-column">
                      {card.cardText}
                    </h2>
                  </div>
                </div>
                
              </swiper-slide>
            </>
          ))}
      </swiper-container>  
    </>
    
  );
};

export default CardList;
