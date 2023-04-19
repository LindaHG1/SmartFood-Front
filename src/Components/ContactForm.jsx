import React, { useState, useEffect} from "react";
import axios from "axios";
import '../assets/sass/components/_contactform.scss';
import InputsRegister from "./InputsRegister/InputsRegister";
import AOS from "aos";
import 'aos/dist/aos.css'; 


const ContactForm = (props) => {
  useEffect(() => {
    AOS.init({duration:1500}); // inicializa AOS
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fields] = useState([
    {
      label: "Nombre y Apellido",
      type: "text",
      id: "name",
    },
    {
      label: "Correo Electrónico",
      type: "email",
      id: "email",
    },
    {
      label: "Mensaje",
      type: "textarea",
      id: "message",
    },
  ]);
  const handleFields = (event) => {
    if (event.target.id === "name") {
      setName(event.target.value);
    }else if(event.target.id === "email"){
      setEmail(event.target.value);
    }else{
        setMessage(event.target.value);
    }
  };

  const sendDataCreate = () => {
    axios.post('http://127.0.0.1:8000/api/contact', {
        name: name,
        email: email,
        message: message
        }, {
          headers: {
              "Content-Type": "multipart/form-data;"
          }
      })
      .then((response) => {
        document.getElementById(`name`).value = ""
        document.getElementById(`email`).value = ""
        document.getElementById(`message`).value = ""
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Enable/Disable button register on click checkbox terms
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section id="contactForm" className="contactForm">
      <div className="container-form" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <h2 className="title">Contáctanos</h2>
        <form className="mx-autoform formContact">
          {fields.map((field) => (
            <div key={field.id} className="mb-3-input form-control">
              <label></label>
              <InputsRegister key={field.id} {...field} handleOnChange={handleFields} />
            </div>
          ))}
          <div className='checkbox'>
            <label>
              <input type="checkbox" id='termschkbx' onChange={handleCheckboxChange}/>
              <p>Acepto los <a href="/terms" id="terminos"><strong>Términos y condiciones</strong></a></p>
            </label>
          </div>
          <p className="cookies">Después de acceder con éxito, se utiliza una cookie en su navegador para dar seguimiento a su sesión. Puede consultar nuestra <a href="/">Politica de cookies </a> para más detalles.</p>
          <button id='btnContact' type="submit" onClick={sendDataCreate} className='btn btnContact' disabled={!isChecked}>Registrarme</button>
        </form>        
      </div>
    </section>      
  );
};

ContactForm.propTypes = {};

export default ContactForm;