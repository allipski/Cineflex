import styled from "styled-components";

export default function Rodape({ image, title, weekday, session}) {
    console.log(weekday, session)
    return (
  <Wrapper>
    <div>
      <img src={image}></img>
    </div>
    <div>
    <h1>{title}</h1>
    {weekday === undefined ? '' : <h1>{weekday} - {session}</h1>}
    </div>
  </Wrapper>
  );
}


const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 117px;
  background-color: #dfe6ed;
  border: #9eadba 1px solid;
  display: flex;
  align-items: center;
  justify-content: start;

  div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 89px;
    padding: 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    object-fit: contain;
    background-color: #ffffff;
    margin: 10px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  h1 {
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
  }
`;
