import {
  User,
  Welcome,
  SharedComp
} from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}>
          <Route index element={<Welcome />} />
            <Route path="user" element={<User />} />
            <Route path="agenda" element={<SharedComp name={"agenda"} />} />
            <Route path="documents" element={<SharedComp name={"documents"} />} />
            <Route path="categories" element={<SharedComp name={"categories"} />} />
            <Route path="entities" element={<SharedComp name={"entities"} />} />
            <Route path="library" element={<SharedComp name={"library"} />} />
            <Route path="data" element={<SharedComp name={"data"} />} />
            <Route path="report-data" element={<SharedComp name={"report data"} />} />
            <Route path="logs-data" element={<SharedComp name={"logs data"} />} />
            <Route path="security" element={<SharedComp name={"security"} />} />
            <Route path="update" element={<SharedComp name={"update"} />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
