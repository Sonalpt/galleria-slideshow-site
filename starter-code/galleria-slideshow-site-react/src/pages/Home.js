import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";
import Card from "../components/Card";

const Home = ({ artData, selectedDetailsId, setDetailsId }) => {
  return (
    <React.Fragment>
      <Navigation
        selectedDetailsId={selectedDetailsId}
        setDetailsId={setDetailsId}
      />
      <div className="cardGrid">
        {artData.map((artCard, index) => {
          return (
            <Card
              key={index}
              index={index}
              artCard={artCard}
              selectedDetailsId={selectedDetailsId}
              setDetailsId={setDetailsId}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Home;
