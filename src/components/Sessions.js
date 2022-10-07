import { useEffect } from "react";
import styled from "styled-components";
import Session from "./Session";
import axios from "axios";
import { useState } from "react";

export default function Sessions({ filmId }) {
  const [sessionsFilm, setSessionsFilm] = useState(null);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmId}/showtimes`
    );

    promise.then((response) => {
      const dataSession = response.data;
      setSessionsFilm(dataSession);
    });
  }, [filmId]);
  if (sessionsFilm === null) return <div>Carregando meu sofrimento</div>;

  if (sessionsFilm !== null) {
    return (
      <ContainerSessions>
        {sessionsFilm.days.map((day, index) => {
          return <Session key={index} day={day} />;
        })}
      </ContainerSessions>
    );
  }
}

const ContainerSessions = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
