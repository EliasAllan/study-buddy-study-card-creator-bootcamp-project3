import React from "react";
import {Link } from "react-router-dom";
import "./cardList.css";

const CardList = ({ cards = [] }) => {
  if (!cards.length) {
    return <h3>No Cards Yet</h3>;
  }

  return (
    <>
      <div className="container my-4" >
        <div className="row">
        {cards &&
          cards.map((card) => (
            <div key={card._id} className="col-sm-4 mb-3 pb-3">
              <div id="study-card" className="p-3 bg-info text-light">
              <Link className=" btn btn-lg btn-info m-2 " to="/delete">
               <i class="fa-solid fa-x:hover"></i>
              </Link> 
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
