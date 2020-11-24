import React from "react";
import CardCointainer from "../assets/styles/cardStyle";

const Card = ({ image, title, excerpt, date }) => {
  const Title = (title) => {
    if (title.length > 27) {
      return `${title.slice(0, 27)}...`;
    } else {
      return title;
    }
  };
  const Excerpt = (excerpt) => {
    if (excerpt.length > 40) {
      return `${title.slice(0, 40)}...`;
    } else {
      return title;
    }
  };
  return (
    <CardCointainer className="card__container">
      <div className="card__image">
        <img src={image} alt="" />
      </div>
      <div className="card__info">
        <h2 className="card-title">{Title(title)}</h2>
        <p className="card-excerpt">{Excerpt(excerpt)}</p>
        <p className="card-date">Published in {date.slice(0, 10)}</p>
      </div>
    </CardCointainer>
  );
};

export default Card;
