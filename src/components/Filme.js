import styled from "styled-components";
import { useParams } from 'react-router-dom';

export default function Filme() {
    const { idFilme } = useParams();

    return (
        <Wrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    color: blue;
`