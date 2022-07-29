import styled from "styled-components";
import Filmes from "./Filmes";

export default function Home() {
    return (
        <Wrapper>
            <h2>Selecione o filme</h2>
            <div>
                <Filmes />
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

h2 {
    font-size: 24px;
    font-weight: 400;
    color: #293845;
    margin: 22px;
}
`