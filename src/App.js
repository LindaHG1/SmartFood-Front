import './App.css';
import Footer from './Components/Footer';

import LoginForm from './Components/LoginForm';

import HomePage from './Components/Header';
import Navbar from './Components/Navbar';
import FruitDetail from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <HomePage />
     <FruitDetail />
     
     <LoginForm />
     
     <Footer />
    </div>
  );
}
export default App;
