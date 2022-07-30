import styled from "styled-components";
import { useState } from "react";

export default function SeatButton({ available, number }) {
  const [escolhido, setEscolhido] = useState(false);
  return (
    <Button
      escolhido={escolhido}
      available={!available}
      onClick={() => {
        !available ? alert('Esse assento não está disponível. Por favor, escolha outro assento.') : setEscolhido(!escolhido)
      }}
    >
      {number}
    </Button>
  );
}

const Button = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid
    ${(props) =>
      props.available ? "#F7C52B" : props.escolhido ? "#1AAE9E" : "#808f9d"};
  background-color: ${(props) =>
    props.available ? "#FBE192" : props.escolhido ? "#8dd7cf" : "#c3cfd9"};
`;
