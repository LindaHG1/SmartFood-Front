import './App.css';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';
import LoginForm from './Components/LoginForm';
import SingIn from './Components/SingIn';
import HomePage from './Components/Header';
import Navbar from './Components/Navbar';
import FruitDetail from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SingIn />
     
      <LoginForm />

    <ContactForm />
      


     
      <Footer />
    </div>
  );
}
export default App;
