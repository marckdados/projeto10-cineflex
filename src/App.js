import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./assets/globalStyle";
import Top from "./components/Top";
import CatalogPage from "./pages/CatalogPage";
import SchedulesPage from "./pages/SchedulesPage";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Top />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/filme/:filmId" element={<SchedulesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
