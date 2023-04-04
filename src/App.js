import './App.css';
import Navbar from './Components/Navbar';
// import HomePage from './Components/Header';
// import Faqs from './Components/FrequentlyAskedQuestions';
// import ContactForm from './Components/ContactForm';
// import LoginForm from './Components/LoginForm';
// import SingIn from './Components/SingIn';
// import FruitDetail from './Components/ProductDetails';
import Shop from './Components/Products/Shop';
import Cards from './Components/Cards';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cards />
      {/* <HomePage/>
      <FruitDetail/>
      <SingIn />
      <LoginForm />
      <ContactForm />
      <Faqs /> */}
      <Footer />
    </div>
  );
}
export default App;
