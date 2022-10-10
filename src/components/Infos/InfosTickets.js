import styled from "styled-components";

export default function InfosTickets({ listSeats }) {
  return (
    <ContainerInfos>
      <TitleInfos>Ingressos</TitleInfos>
      {listSeats.map((seat, index) => {
        return <span key={index}>Assento {seat}</span>;
      })}
    </ContainerInfos>
  );
}

const ContainerInfos = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  margin-top: 40px;
`;

const TitleInfos = styled.h3`
  font-size: 1.5em;
  font-weight: 700;
  color: #293845;
`;
