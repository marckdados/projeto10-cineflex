import { useState } from "react";
import styled from "styled-components";
import Seat from "./Seat";

export default function Seats({ seats }) {
  const [listSeats, setListSeats] = useState([]);
  console.log(listSeats);
  return (
    <ContainerSeats>
      {seats.map((seat, index) => {
        return (
          <Seat
            name={seat.name}
            id={seat.id}
            isAvailable={seat.isAvailable}
            key={index}
            listSeats={listSeats}
            setListSeats={setListSeats}
          />
        );
      })}
    </ContainerSeats>
  );
}

const ContainerSeats = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 5px;
`;
