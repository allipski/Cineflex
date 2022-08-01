import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SeatButton from "./SeatButton";
import Legenda from "./Legenda";
import Form from "./Form";

export default function Assentos() {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState([]);
  const [chosen, setChosen] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((answer) => {
      setSeats(answer.data.seats);
    });
  }, []);

  console.log(chosen);

  return (
    <Wrapper>
      <h2>Selecione o(s) assento(s)</h2>
      <div>
        {seats.map((seat, index) => (
          <Seat key={index}>
            <SeatButton
              chosen={chosen}
              setChosen={setChosen}
              available={seat.isAvailable}
              number={seat.name}
              id={seat.id}
            />
          </Seat>
        ))}
      </div>
      <Legenda />
      <Form chosen={chosen}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;

  h2 {
    font-size: 24px;
    font-weight: 400;
    color: #293845;
    margin: 32px 0 22px 0;
  }

  & > div:nth-of-type(1) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 333px;
    gap: 5px;
  }
`;

const Seat = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
