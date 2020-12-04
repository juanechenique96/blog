import styled from "styled-components";

const CardCointainer = styled.div`
  height: 450px;
  width: 300px;
  box-shadow: 5px 7px 25px -6px rgba(129, 129, 133, 0.3);
  display: flex;
  flex-direction: column;
  justify-self: center;

  .card__image {
    height: 300px;
    width: 300px;
  }

  .card__image img {
    height: 300px;
    width: 300px;
  }

  .card__info {
    margin: 4px 12px;
    line-height: 20px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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
  }
`;

export default CardCointainer;
