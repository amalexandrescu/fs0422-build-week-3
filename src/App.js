import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ResourcesSinglePageComponent from "./components/ResourcesSinglePageComponent.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProfile from "./components/MyProfile"
import CustomNavbar from "./components/CustomNavbar.jsx";

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
