import Navbar from "./components/Navbar"
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './AllRoutes'
import Footer from './components/Footer'
import Socialiconsbar from './components/Socialiconsbar'


function App() {
  return (
    <div >
      <Router>
      <Navbar />
      <Socialiconsbar />
      <AllRoutes />
      </Router>
      <Footer />

      

    </div>
  );
}

export default App;
