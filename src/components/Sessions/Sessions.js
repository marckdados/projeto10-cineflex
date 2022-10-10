import styled from "styled-components";
import Session from "./Session";

export default function Sessions({ sessionsFilm }) {
  return (
    <ContainerSessions>
      {sessionsFilm.days.map((day, index) => {
        return <Session key={index} day={day} />;
      })}
    </ContainerSessions>
  );
}

const ContainerSessions = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
`;
