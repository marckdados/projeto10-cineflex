import styled from "styled-components";

export default function InputForm({ name, setName, cpf, setCpf }) {
  return (
    <ContainerInputForm>
      <label htmlFor="name">Nome do comprador:</label>
      <input
        type="text"
        placeholder="Digite seu nome..."
        onChange={(e) => setName(e.target.value)}
        value={name}
        required
      />

      <label htmlFor="name">CPF do comprador:</label>
      <input
        type="text"
        placeholder="Digite seu CPF..."
        onChange={(e) => setCpf(e.target.value)}
        value={cpf}
        required
      />
      <button type="submit">Reservar assento(s)</button>
    </ContainerInputForm>
  );
}

const ContainerInputForm = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  margin: 20px 0;

  label {
    width: 100%;
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

  button {
    width: 60%;
    height: 50px;
    background-color: #e8833a;
    border: none;
    border-radius: 6px;
    color: #ffffff;
    font-size: 1.2em;
  }
`;
