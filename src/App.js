import './App.css';
import Footer from './Components/Footer'
import Navbar from './Components/Navbar';
import FruitDetail from './Components/ProductDetails';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <FruitDetail/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
