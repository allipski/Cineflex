import styled from "styled-components";

export default function Legenda() {
  return (
    <Wrapper>
      <div>
        <Selecionado></Selecionado>
        <Texto>Selecionado</Texto>
      </div>
      <div>
        <SeatLeg></SeatLeg>
        <Texto>Disponível</Texto>
      </div>
      <div>
        <Ocupado></Ocupado>
        <Texto>Indisponível</Texto>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 333px;
  margin-top: 20px;

  div {
    width: 26px;
    height: 52px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const Seat = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SeatLeg = styled(Seat)`
  border-radius: 12px;
  border: 1px solid #808f9d;
  background-color: #c3cfd9;
`;

const Selecionado = styled(Seat)`
  border-radius: 12px;
  border: 1px solid #1aae9e;
  background-color: #8dd7cf;
`;

const Ocupado = styled(Seat)`
  border-radius: 12px;
  border: 1px solid #F7C52B;
  background-color: #FBE192;
`;

const Texto = styled.div`
    font-size: 13px;
    font-weight: 400;
`