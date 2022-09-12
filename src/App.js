import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OverviewPage from "./pages/OverviewPage";
import StarshipsPage from "./pages/StarshipsPage";
import PeoplePage from "./pages/PeoplePage";
import SpeciesPage from "./pages/SpeciesPage";
import OverviewDetails from "./pages/OverviewDetails";
import PeopleDetails from "./pages/OverviewDetails";
import SpeciesDetails from "./pages/OverviewDetails";
import StarshipsDetails from "./pages/OverviewDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Overview" element={<OverviewPage />} />
        <Route path="/Overview:title" element={<OverviewDetails/>} />
        <Route path="/Starships" element={<StarshipsPage />} />
        <Route path="/Starships:title" element={<StarshipsDetails/>} />
        <Route path="/People" element={<PeoplePage />} />
        <Route path="/People:title" element={<PeopleDetails/>} />
        <Route path="/Species" element={<SpeciesPage />} />
        <Route path="/Species:title" element={<SpeciesDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
