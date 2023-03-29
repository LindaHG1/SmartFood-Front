import './App.css';
import Footer from './Components/Footer'
import HomePage from './Components/Header';
import Navbar from './Components/Navbar';
import FruitDetail from './Components/ProductDetails';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <HomePage/>
      <FruitDetail/>
      <Footer />
    </div>
  );
}

export default App;
