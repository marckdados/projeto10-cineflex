import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Time({ name, id }) {
  return (
    <ContainerTime>
      <Link to={`/sessao/${id}`}>{name}</Link>
    </ContainerTime>
  );
}

const ContainerTime = styled.div`
  width: 20%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8833a;
  border-radius: 6px;
  font-family: "Roboto", sans-serif;

  a {
    text-decoration: none;
    color: #ffffff;
  }
`;
