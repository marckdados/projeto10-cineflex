import styled from "styled-components";

export default function Title({ value }) {
  return <ContainerTitle>{value}</ContainerTitle>;
}

const ContainerTitle = styled.div`
  font-family: "Roboto";
  font-size: 1.2em;
`;
