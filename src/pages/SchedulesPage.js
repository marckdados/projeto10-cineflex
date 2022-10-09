import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import styled from "styled-components";
import Sessions from "../components/Sessions/Sessions";
import Title from "../components/Title/Title";

export default function SchedulesPage({ sessionsFilm, setSessionsFilm }) {
  const { filmId } = useParams();
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
      <ContainerTime>
        {console.log(sessionsFilm)}
        <Title value="Selecione o horário" />
        <Sessions filmId={filmId} sessionsFilm={sessionsFilm} />
        <Footer
          imagePoster={sessionsFilm.posterURL}
          title={sessionsFilm.title}
        />
      </ContainerTime>
    );
  }
}

const ContainerTime = styled.div`
  margin-top: 40px;
  gap: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
