import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import InputForm from "./InputForm";
export default function Form({
  name,
  setName,
  cpf,
  setCpf,
  listSeats,
  idSeats,
  setIdSeats,
}) {
  const navigate = useNavigate();
  function sendDate(event) {
    event.preventDefault();
    const body = {
      ids: idSeats,
      name: name,
      cpf: cpf,
    };
    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      body
    );

    promise.then((resposta) => {
      navigate("/sucesso");
    });
  }
  return (
    <ConteinerForm onSubmit={sendDate}>
      <InputForm name={name} setName={setName} cpf={cpf} setCpf={setCpf} />
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
