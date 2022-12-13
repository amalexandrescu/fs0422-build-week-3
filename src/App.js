import ExperienceComponent from "./components/center/ExperienceComponent"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import ResourcesSinglePageComponent from "./components/center/ResourcesSinglePageComponent.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyProfile from "./components/global/MyProfile"
import CustomNavbar from "./components/global/CustomNavbar.jsx"
import { useDispatch } from "react-redux"
import { hideUserSearchAction } from "./redux/actions"
import MessagingPopup from "./components/global/MessagingPopup"
import { useSelector } from "react-redux"
import SearchDisplay from "./components/global/SearchDisplay.jsx"

function App() {
  const dispatch = useDispatch()
  let showSearchResults = useSelector((state) => state.showUsers.show)
  return (
    <BrowserRouter>
      <div className="App" onClick={() => dispatch(hideUserSearchAction())}>
        <CustomNavbar />
        {showSearchResults && <SearchDisplay />}
        <Routes>
          <Route path="/" element={<MyProfile />} />
          <Route
            path="/details/resources"
            element={<ResourcesSinglePageComponent />}
          />
          <Route path="/editexperiences" element={<ExperienceComponent />} />
        </Routes>
      </div>
      <MessagingPopup />
    </BrowserRouter>
  )
}

export default App
