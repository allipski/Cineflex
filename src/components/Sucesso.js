import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sucesso() {
  const location = useLocation();
  const navigate = useNavigate();

  const { date, session, title, weekday } = location.state.state;
  const { numeros, ids, name, cpf } = location.state.compra;

  return (
    <Wrapper>
      <h1>Pedido feito com sucesso!</h1>
      <div>
        <h2>Filme e Sessão</h2>
        <h3>{title}</h3>
        <h3>
          {date} - {session}
        </h3>
      </div>
      <div>
        <h2>Ingressos</h2>
        {numeros.map((valor, index) => (
          <h3 key={index}>Assento {valor}</h3>
        ))}
      </div>
      <div>
        <h2>Comprador</h2>
        <h3>Nome: {name}</h3>
        <h3>
          CPF: {cpf.slice(0, 3)}.{cpf.slice(3, 6)}.{cpf.slice(6, 9)}-
          {cpf.slice(9, 11)}
        </h3>
      </div>
      <button onClick={() => navigate("/")}>Voltar pra Home</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 95%;
  gap: 15px;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #247a6b;
    align-self: center;
    text-align: center;
    margin: 30px;
  }

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #293845;
  }
  h3 {
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #293845;
  }

  button {
    background-color: #e8833a;
    border: none;
    border-radius: 3px;
    padding: 10px 18px;
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    align-self: center;
    margin-top: 40px;
  }
`;
