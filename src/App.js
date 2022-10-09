import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./assets/globalStyle";
import Top from "./components/Top/Top";
import CatalogPage from "./pages/CatalogPage";
import SchedulesPage from "./pages/SchedulesPage";
import SeatsPage from "./pages/SeatsPage";
import { useState } from "react";

export default function App() {
  const [sessionsFilm, setSessionsFilm] = useState(null);
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
        <Route path="/sessao/:sessaoId" element={<SeatsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
