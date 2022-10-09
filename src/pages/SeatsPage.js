import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Seats from "../components/Seats/Seats";
import Title from "../components/Title/Title";
import axios from "axios";

export default function SeatsPage() {
  const { sessaoId } = useParams();
  const [session, setSession] = useState(null);
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`
    );

    promise.then((response) => {
      setSession(response.data);
    });
  }, []);

  if (session === null) {
    return <div>Carregando...</div>;
  }
  if (session !== null) {
    return (
      <ContainerSeatsPage>
        <Title value="Selecione o(s) assento(s)" />
        <Seats seats={session.seats} />
        <Footer
          imagePoster={session.movie.posterURL}
          title={session.movie.title}
          day={session.day.weekday}
          name={session.name}
        />
      </ContainerSeatsPage>
    );
  }
}

const ContainerSeatsPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
