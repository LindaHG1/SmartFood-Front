import React, { useState, useEffect} from "react";
import axios from "axios";
import InputsRegister from "./InputsRegister/InputsRegister";
import '../assets/sass/components/_signinform.scss';
import AOS from "aos";
import 'aos/dist/aos.css'; 


const RegisterForm = (props) => {
  useEffect(() => {
    AOS.init({duration:1500}); // inicializa AOS
  }, []);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [fields] = useState([
    {
      label: "Nombre",
      type: "text",
      id: "name",
    },
    {
      label: "Apellido",
      type: "text",
      id: "lastname",
    },
    {
      label: "Correo Electrónico",
      type: "email",
      id: "email",
    },
    {
      label: "Contraseña",
      type: "password",
      id: "password",
    },
    {
      label: "Dirección:",
      type: "text",
      id: "address",
    },
  ]);
  const handleFields = (event) => {
    if (event.target.id === "name") {
      setName(event.target.value);
    }else if(event.target.id === "lastname"){
      setLastname(event.target.value);
    }else if(event.target.id === "email"){
      setEmail(event.target.value);
    }else if(event.target.id === "password"){
      setPassword(event.target.value);
    }else{
        setAddress(event.target.value);
    }
  };

  const sendDataCreate = () => {
    let isValid = true;
    if (name === "" || lastname === "" || email === "" || password === "" || address === "") {
      isValid = false;
    }
    if (isValid) {
      axios.post('http://127.0.0.1:8000/api/clients', {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        address: address
      }, {
        headers: {
          "Content-Type": "multipart/form-data;"
        }
      })
        .then((response) => {
          document.getElementById(`name`).value = ""
          document.getElementById(`lastname`).value = ""
          document.getElementById(`email`).value = ""
          document.getElementById(`password`).value = ""
          document.getElementById(`address`).value = ""
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Por favor complete todos los campos.");
    }   
  };

  // Enable/Disable button register on click checkbox terms
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section id="registerform" className="registerform">
      <div className="container-form" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <h2 className="title">Regístrate</h2>
        <form className="mx-autoform formRegister">
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
          <button id='btnRegister' type="submit" onClick={sendDataCreate} className='btn btnRegister' disabled={!isChecked}>Registrarme</button>
          <div>
                <p className="have-acount">¿Ya tienes una cuenta?<a href="/login"> Iniciar sesión</a></p>
              </div>
        </form>        
      </div>
    </section>      
  );
};

RegisterForm.propTypes = {};

export default RegisterForm