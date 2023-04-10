import './App.css';
import Footer from './Components/Footer';
import SingIn from './Components/SingIn';
import LoginForm from './Components/LoginForm';
import Contactform from './Components/ContactForm';
import HomePage from './Components/Header';
import Navbar from './Components/Navbar';
import FruitDetail from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <HomePage />
     <FruitDetail />
     <Contactform />
     <LoginForm />
     <SingIn />
     <Footer />
    </div>
  );
}
export default App;
