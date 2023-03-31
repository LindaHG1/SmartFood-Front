import './App.css';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';
import LoginForm from './Components/LoginForm';
import SingIn from './Components/SingIn';







function App() {
  return (
    <div className="App">
      <SingIn />
     
      <LoginForm />

    <ContactForm />
      
      <Footer />
    </div>
  );
}

export default App;
