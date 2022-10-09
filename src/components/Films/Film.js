import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Film({ posterURL, title, id }) {
  return (
    <Link to={`/filme/${id}`}>
      <ContainerFilm>
        <img src={posterURL} alt={title} />
      </ContainerFilm>
    </Link>
  );
}

const ContainerFilm = styled.div`
  width: 20vh;
  height: 25vh;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 10px 10px;

  img {
    width: 80%;
  }
`;
