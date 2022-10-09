import styled from "styled-components";
import Films from "../components/Films/Films";
import Title from "../components/Title/Title";
export default function CatalogPage() {
  return (
    <Container>
      <Title value="Selecione o filme" />
      <Films />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 10%;
`;
