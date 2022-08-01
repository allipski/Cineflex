import styled from "styled-components";
import { useParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Filme() {
  const { idFilme } = useParams();
  const [times, setTimes] = useState([]);
  const state = useLocation();
  console.log(state.state);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`
    );

    promise.then((answer) => {
      setTimes(answer.data.days);
    });
  }, []);

  return (
    <Wrapper>
      <h2>Selecione o horário</h2>
      <div>
        {times.map((time, index) => (
          <div key={index}>
            <h3>
              {time.weekday} - {time.date}
            </h3>
            <div>
              {time.showtimes.map((session, index) => (
                <Link
                  key={index}
                  to={`/assentos/${session.id}`}
                  state={{
                    ...state.state,
                    weekday: time.weekday,
                    date: time.date,
                    session: session.name,
                  }}
                >
                  <button>{session.name}</button>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h2 {
    font-size: 24px;
    font-weight: 400;
    color: #293845;
    margin: 32px 0;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    gap: 30px;
  }

  & > div > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    gap: 15px;
  }

  & > div > div > div {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  h3 {
    font-size: 20px;
    font-weight: 400;
  }

  button {
    background-color: #e8833a;
    border: none;
    border-radius: 3px;
    padding: 6px 9px;
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
  }

  button:hover {
    cursor: pointer;
  }
`;
