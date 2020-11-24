import styled from "styled-components";

const CardCointainer = styled.div`
  height: 133px;
  width: 540px;
  box-shadow: 5px 7px 25px -6px rgba(129, 129, 133, 0.3);
  display: grid;
  grid-template-columns: 340px 200px;

  .card__image {
    grid-column: 2/2;
    grid-row: 1;
    display: flex;
    justify-content: flex-end;
  }

  .card__image img {
    height: 133px;
    width: 200px;
  }

  .card__info {
    grid-column: 1/2;
    grid-row: 1;
    display: flex;
    margin: 4px 12px;
    flex-direction: column;
    line-height: 20px;
  }

  .card__info h2 {
    padding-top: 16px;
    font-weight: 700;
    letter-spacing: 0px;
  }

  .card__info p {
    padding-top: 16px;
    font-weight: 400;
    color: #757575;
  }

  .card__info .card-date {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    .card__container {
      grid-template-columns: 200px 100px;
    }
    .card__image img {
      height: 33px;
      width: 100px;
    }
  }
`;

export default CardCointainer;
