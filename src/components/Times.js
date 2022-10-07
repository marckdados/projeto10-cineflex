import styled from "styled-components";
import Time from "./Time";

export default function Times({ showTimes }) {
  return (
    <ContainerTimes>
      {showTimes.map((time, index) => {
        return <Time name={time.name} id={time.id} key={index} />;
      })}
    </ContainerTimes>
  );
}

const ContainerTimes = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
