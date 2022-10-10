import styled from "styled-components";

export default function ButtonDemo({ typeButton, color, border }) {
  return (
    <ContainerButtonDemo typeButton={typeButton} color={color} border={border}>
      <div></div>
      <span>{typeButton}</span>
    </ContainerButtonDemo>
  );
}

const ContainerButtonDemo = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 3vh;
    height: 3vh;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    border: 1px solid ${(props) => props.border};
    margin-bottom: 5px;
  }
`;
