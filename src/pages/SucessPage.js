import { Link } from "react-router-dom";
import styled from "styled-components";
import InfosTickets from "../components/Infos/InfosTickets";

export default function SucessPage({
  sessionsFilm,
  session,
  listSeats,
  cpf,
  name,
}) {
  function formataCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  const newCpf = formataCPF(cpf);

  return (
    <ContainerSucessPage>
      <MessageSucess>Pedido feito com sucesso!</MessageSucess>
      <ContainerInfos>
        <TitleInfos>Filme e sessão</TitleInfos>
        <span>{sessionsFilm.title}</span>
        <span>
          {session.day.weekday} - {session.name}
        </span>
        <InfosTickets listSeats={listSeats} />
        <TitleInfos>Comprador</TitleInfos>
        <span>Nome: {name}</span>
        <span>CPF: {newCpf}</span>
      </ContainerInfos>
      <ButtonSucess>
        <Link to="/">Voltar para Home</Link>
      </ButtonSucess>
    </ContainerSucessPage>
  );
}

const ContainerSucessPage = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

const MessageSucess = styled.h2`
  text-align: center;
  width: 40%;
  font-size: 1.8em;
  font-weight: 700;
  color: #247a6b;
`;

const ContainerInfos = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  gap: 5px;

  span {
    color: #293845;
    font-weight: 2em;
  }
`;

const TitleInfos = styled.h3`
  font-size: 1.5em;
  font-weight: 700;
  margin-top: 40px;
  color: #293845;
`;

const ButtonSucess = styled.button`
  margin-top: 40px;
  width: 50%;
  height: 50px;
  background-color: #e8833a;
  font-size: 1.2em;
  border: none;
  border-radius: 6px;

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;
