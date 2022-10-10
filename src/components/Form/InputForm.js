import styled from "styled-components";

export default function InputForm({ name, setName, cpf, setCpf }) {
  return (
    <ContainerInputForm>
      <label htmlFor="name">Nome do comprador:</label>
      <input placeholder="Digite seu nome..." />

      <label htmlFor="name">CPF do comprador:</label>
      <input placeholder="Digite seu CPF..." />
    </ContainerInputForm>
  );
}

const ContainerInputForm = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  margin: 20px 0;

  label {
    font-size: 1.2em;
  }

  input {
    width: 100%;
    height: 50px;
    border: 1px solid #d4d4d4;
    border-radius: 6px;
    font-size: 1.1em;
    margin-bottom: 20px;
  }
`;
