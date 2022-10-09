import styled from "styled-components";
import Times from "../Times/Times";

export default function Session({ day }) {
  return (
    <ContainerSession>
      <span>{`${day.weekday} - ${day.date}`}</span>
      <Times showTimes={day.showtimes} />
    </ContainerSession>
  );
}

const ContainerSession = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  gap: 20px;
`;
