import { useState } from "react";
import styled from "styled-components";

export default function Seat({
  name,
  id,
  isAvailable,
  listSeats,
  setListSeats,
  idSeats,
  setIdSeats,
}) {
  const GRAY = "#c3cfd9";
  const BORDER_GRAY = "#808f9d";
  const GREEN = "#1AAE9E";
  const BORDER_GREEN = "#0E7D71";

  const [color, setColor] = useState(GRAY);
  const [border, setBorder] = useState(BORDER_GRAY);
  const [selected, setSelected] = useState(false);

  function checkAvailable(isAvailable) {
    if (isAvailable) {
      const changeSelected = !selected;
      switch (changeSelected) {
        case true:
          setColor(GREEN);
          setBorder(BORDER_GREEN);
          setListSeats((listSeats) => [...listSeats, name]);
          setIdSeats((idSeats) => [...idSeats, id]);
          break;
        case false:
          setColor(GRAY);
          setBorder(BORDER_GRAY);
          const newArray = listSeats.filter((removeName) => {
            if (removeName !== name) {
              return name;
            }
            return 0;
          });
          setListSeats(newArray);
          const newIds = idSeats.filter((removeId) => {
            if (removeId !== id) {
              return id;
            }
            return 0;
          });
          setIdSeats(newIds);
          break;
        default:
          break;
      }
      setSelected(changeSelected);
    }
  }

  return (
    <ContainerSeat
      onClick={() => {
        checkAvailable(isAvailable);
      }}
      isAvailable={isAvailable}
      color={color}
      border={border}
    >
      {name}
    </ContainerSeat>
  );
}

const ContainerSeat = styled.div`
  width: 7%;
  height: 3vh;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => (props.isAvailable ? props.border : "#F7C52B")};
  background-color: ${(props) => (props.isAvailable ? props.color : "#FBE192")};
  font-family: "Roboto", sans-serif;
  font-size: 0.8em;
`;
