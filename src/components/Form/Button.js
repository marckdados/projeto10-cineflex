import styled from "styled-components";

export default function Button() {
  return <ConteinerButton>Reservar assento(s)</ConteinerButton>;
}

const ConteinerButton = styled.button`
  width: 60%;
  height: 50px;
  background-color: #e8833a;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  font-size: 1.2em;
`;
