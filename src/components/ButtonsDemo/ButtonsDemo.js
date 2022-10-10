import styled from "styled-components";
import ButtonDemo from "./ButtonDemo";

export default function ButtonsDemo() {
  return (
    <ContainerButtonsDemo>
      <ButtonDemo typeButton="Selecionado" color="#1AAE9E" border="#0E7D71" />
      <ButtonDemo typeButton="Disponível" color="#c3cfd9" border="#808f9d" />
      <ButtonDemo typeButton="Indisponível" color="#FBE192" border="#F7C52B" />
    </ContainerButtonsDemo>
  );
}

const ContainerButtonsDemo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
  font-family: "Roboto", sans-serif;
`;
