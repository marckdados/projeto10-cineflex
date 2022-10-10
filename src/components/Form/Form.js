import styled from "styled-components";
import Button from "./Button";
import InputForm from "./InputForm";
export default function Form({ name, setName, cpf, setCpf }) {
  return (
    <ConteinerForm>
      <InputForm name={name} setName={setName} />
      <Button />
    </ConteinerForm>
  );
}

const ConteinerForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
