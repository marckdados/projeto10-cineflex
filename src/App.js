import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./assets/globalStyle";
import Top from "./components/Top/Top";
import CatalogPage from "./pages/CatalogPage";
import SchedulesPage from "./pages/SchedulesPage";
import SeatsPage from "./pages/SeatsPage";
import { useState } from "react";
import SucessPage from "./pages/SucessPage";

export default function App() {
  const [sessionsFilm, setSessionsFilm] = useState(null);
  const [session, setSession] = useState(null);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [listSeats, setListSeats] = useState([]);
  const [idSeats, setIdSeats] = useState([]);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Top />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route
          path="/filme/:filmId"
          element={
            <SchedulesPage
              sessionsFilm={sessionsFilm}
              setSessionsFilm={setSessionsFilm}
            />
          }
        />
        <Route
          path="/sessao/:sessaoId"
          element={
            <SeatsPage
              session={session}
              setSession={setSession}
              name={name}
              setName={setName}
              cpf={cpf}
              setCpf={setCpf}
              listSeats={listSeats}
              setListSeats={setListSeats}
              idSeats={idSeats}
              setIdSeats={setIdSeats}
            />
          }
        />
        <Route
          path="/sucesso"
          element={
            <SucessPage
              sessionsFilm={sessionsFilm}
              session={session}
              listSeats={listSeats}
              cpf={cpf}
              name={name}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
