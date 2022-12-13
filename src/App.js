import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ResourcesSinglePageComponent from "./components/center/ResourcesSinglePageComponent.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProfile from "./components/global/MyProfile";
import CustomNavbar from "./components/global/CustomNavbar.jsx";
import ExperienceComponent from "./components/center/ExperienceComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<MyProfile />} />
          <Route
            path="/details/resources"
            element={<ResourcesSinglePageComponent />}
          />
          <Route path="/editexperiences" element={<ExperienceComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
