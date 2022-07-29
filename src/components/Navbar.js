import styled from "styled-components";

export default function Navbar() {
    return (
        <Wrapper>
            <h1>CINEFLEX</h1>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;

h1 {
    color: #E8833A;
    font-size: 34px;
    font-weight: 400;
}
`