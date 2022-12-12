import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ResourcesComponent from "./components/ResourcesComponent.jsx";
import ResourcesSinglePageComponent from "./components/ResourcesSinglePageComponent.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ResourcesComponent />} />
          <Route
            path="/details/resources"
            element={<ResourcesSinglePageComponent />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
