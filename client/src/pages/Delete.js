import React from "react";
import CardForm from "../components/CardForm";
import CardList from "../components/CardList";
import { useLocation, useNavigate } from "react-router-dom";

const Delete = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <main>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-info text-light p-3 mb-5">
          Your card has been removed from the deck
        </h2>
        <div className="flex-row justify-center mb-3">
          {location.pathname !== "/" && (
            <button className="btn btn-dark mb-3" onClick={() => navigate(-1)}>
              &larr; Return to your deck of cards
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Delete;
