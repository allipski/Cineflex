import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Filmes() {
    const [movies, setMovies] = useState([]);

	useEffect(() => {
		const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

		promise.then(answer => {
			setMovies(answer.data);
		});
	}, []);

	return (
        <Wrapper>
            {movies.map((movie, index) =>
            <div key={index}>
                <Link to={`/sessoes/${movie.id}`}>
                    <img alt={index} src={movie.posterURL}></img>
                </Link>
            </div>)}
        </Wrapper>
	);
}

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;

div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 145px;
    height: 209px;
    padding: 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    object-fit: contain;
    margin: 10px;
}

img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}
`