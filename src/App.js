import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'

function App() {
  return (
    <div>
      {/* a prop is an additional piece of info you add on the
      INVOCATION of a component */}
      <CustomNavbar additionalBrand="Best Italian Restaurant" />
      <Home />
    </div>
  )
}

export default App
