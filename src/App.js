import CustomNavbar from "./components/CustomNavbar.jsx";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePageCenter from "./components/ProfilePageCenter";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <ProfilePageCenter />
    </div>
  );
}

export default App;
