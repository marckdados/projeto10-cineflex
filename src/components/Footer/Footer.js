import styled from "styled-components";

export default function Footer({ imagePoster, title, day, name }) {
  return (
    <ContainerFooter>
      <div>
        <img src={imagePoster} alt={title} />
      </div>
      <div className="text">
        <span>{title}</span>
        {day !== undefined ? <span>{`${day} - ${name} `}</span> : ""}
      </div>
    </ContainerFooter>
  );
}

const ContainerFooter = styled.div`
  width: 100%;
  height: 15vh;
  background-color: #dfe6ed;
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  color: #293845;
  font-size: 1.5em;
  position: fixed;
  bottom: 0;
  left: 0;

  div {
    width: 20%;
    height: 13vh;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }
  img {
    width: 80%;
  }

  .text {
    width: 70%;
    background: none;
    display: flex;
    align-items: baseline;

    span {
      margin: 5px 0;
    }
  }
`;
