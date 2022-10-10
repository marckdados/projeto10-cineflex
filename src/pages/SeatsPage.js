import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Seats from "../components/Seats/Seats";
import Title from "../components/Title/Title";
import axios from "axios";
import ButtonsDemo from "../components/ButtonsDemo/ButtonsDemo";
import Form from "../components/Form/Form";

export default function SeatsPage({
  session,
  setSession,
  cpf,
  setCpf,
  name,
  setName,
  listSeats,
  setListSeats,
  idSeats,
  setIdSeats,
}) {
  const { sessaoId } = useParams();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`
    );

    promise.then((response) => {
      setSession(response.data);
    });
  }, [sessaoId, name, setCpf, setName, cpf]);

  if (session === null) {
    return <div>Carregando...</div>;
  }
  if (session !== null) {
    return (
      <ContainerSeatsPage>
        <Title value="Selecione o(s) assento(s)" />
        <Seats
          seats={session.seats}
          listSeats={listSeats}
          setListSeats={setListSeats}
          idSeats={idSeats}
          setIdSeats={setIdSeats}
        />
        <ButtonsDemo />
        <Form
          name={name}
          setName={setName}
          cpf={cpf}
          setCpf={setCpf}
          listSeats={listSeats}
          setListSeats={setListSeats}
          idSeats={idSeats}
          setIdSeats={setIdSeats}
        />
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
