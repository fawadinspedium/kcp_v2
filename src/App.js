import Slider from './components/slider';
import Footer from './layouts/Footer';
import NavBar from './layouts/NavBar';
import logo from './logo.svg';
import './styles/style.css';
import {routes} from './routes'
import { Routes,Route } from 'react-router';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Slider/>
      {/* <Routes>
      </Routes>
     */}
      <Footer/>
    </div>
  );
}

export default App;
