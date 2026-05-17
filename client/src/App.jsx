import Navbar from "./components/navbar/Navbar.jsx"
import "./styles/layout.scss"
import Homepage from "./routes/homepage/homepage.jsx"

function App() {
  return (
    <div className="layout">
      <div className="navBar">
        <Navbar />
      </div>
      <div className="content">
        <Homepage />
      </div>
    </div>
  )
}

export default App