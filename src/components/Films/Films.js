import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Film from "./Film";

export default function Films() {
  const [films, setFilms] = useState([]);
  const URL = "https://mock-api.driven.com.br/api/v8/cineflex/";
  useEffect(() => {
    const promise = axios.get(`${URL}/movies`);

    promise.then((resposta) => {
      setFilms(resposta.data);
    });
  }, []);

  return (
    <ContainerFilms>
      {films.map((film, index) => {
        return (
          <Film
            key={index}
            posterURL={film.posterURL}
            title={film.title}
            id={film.id}
          />
        );
      })}
    </ContainerFilms>
  );
}

const ContainerFilms = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
