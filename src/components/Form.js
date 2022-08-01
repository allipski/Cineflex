import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form({chosen}) {
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const navigate = useNavigate();

  function reservarAssentos() {
    console.log({
      ids: chosen,
      name: nome,
      cpf: cpf,
    })
    axios
      .post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", {
        ids: chosen,
        name: nome,
        cpf: cpf,
      })
      .then(navigate("/sucesso")).catch((err) => console.log(err));
  }

  return (
    <Forms onSubmit={reservarAssentos}>
      <div>
      <label htmlFor="nome">Nome do comprador:</label>
      <input
        type="text"
        value={nome}
        id="nome"
        placeholder="Digite seu nome..."
        onChange={(e) => setNome(e.target.value)}
        required
      />
      </div>
      <div>
      <label htmlFor="nome">CPF do comprador:</label>
      <input
        type="text"
        value={cpf}
        id="cpf"
        placeholder="Digite seu CPF..."
        onChange={(e) => setCPF(e.target.value)}
        required
      />
      </div>
      <button type="submit">Reservar Assento(s)</button>
    </Forms>
  );
}

const Forms = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  margin-top: 35px;
  font-weight: 400;
  font-size: 18px;

  div{
    width: 100%;
  }

  input {
    width: 100%;
    height: 40px;
    border: 1px solid #D4D4D4;
    border-radius: 3px;
    margin-top: 3px;
  }

  input::placeholder {
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
  }

  button {
    background-color: #E8833A;
    border: none;
    border-radius: 3px;
    padding: 10px 14px;
    font-size: 18px;
    font-weight: 400;
    color: #FFFFFF;
    align-self: center;
    margin-top: 40px;
  }
`;
