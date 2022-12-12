import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyProfile from "./components/MyProfile"
import CustomNavbar from "./components/CustomNavbar.jsx";


function App() {
  return (
    <div className="App">
     <CustomNavbar />
       <MyProfile />
   
    </div>
  )
}

export default App
