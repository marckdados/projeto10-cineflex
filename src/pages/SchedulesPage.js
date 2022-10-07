import { useParams } from "react-router-dom";
import styled from "styled-components";
import Sessions from "../components/Sessions";
import Title from "../components/Title";

export default function SchedulesPage() {
  const { filmId } = useParams();
  return (
    <ContainerTime>
      <Title value="Selecione o horário" />
      <Sessions filmId={filmId} />
    </ContainerTime>
  );
}

const ContainerTime = styled.div`
  margin-top: 40px;
  gap: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
