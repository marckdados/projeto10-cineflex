import { useState } from "react";
import styled from "styled-components";

export default function Seat({ name, id, isAvailable }) {
  const GRAY = "#c3cfd9";
  const BORDER_GRAY = "#808f9d";

  const [color, setColor] = useState(GRAY);
  const [border, setBorder] = useState(BORDER_GRAY);
  const [selected, setSelected] = useState(false);
  //const [listSeats, setListSeats] = useState([]);
  function checkAvailable(isAvailable) {
    if (isAvailable) {
      const changeSelected = !selected;

      switch (changeSelected) {
        case true:
          const GREEN = "#1AAE9E";
          const BORDER_GREEN = "#0E7D71";
          setColor(GREEN);
          setBorder(BORDER_GREEN);
          break;
        case false:
          setColor(GRAY);
          setBorder(BORDER_GRAY);
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
