import React from "react";
import {Link } from "react-router-dom";
import "./cardList.css";

const CardList = ({ cards = [] }) => {
  if (!cards.length) {
    return <h3>No Cards Yet</h3>;
  }

  return (
    <>
      <div className="container">
        <div className="row">
        {cards &&
          cards.map((card) => (
            <div key={card._id} className="col-sm-4 mb-3">
              <div id="study-card" className=" bg-info text-light">
              

              <Link className="btn btn-lg btn-info m-2" to="/delete">
               <div className="icon bg-info">
               <i class="fa-regular fa-x"></i>
               </div> 
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
