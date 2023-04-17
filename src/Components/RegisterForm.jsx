import React, { useState, useEffect} from "react";
import axios from "axios";
import InputsRegister from "./InputsRegister/InputsRegister";
import '../assets/sass/components/_signinform.scss';
<<<<<<< HEAD
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
=======
import AOS from "aos";
import 'aos/dist/aos.css'; 
>>>>>>> 00622b1ce2c527dfc811623c3d40b4cfb3fa3350


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

<<<<<<< HEAD
const RegisterForm = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // inicializa AOS
  }, []);

  return (
    <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
    <div className="container-form">
      <h1 className="title">FORMULARIO DE REGISTRO</h1>

      <Formik
        initialValues={{
          name: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          address: ''
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Este campo es obligatorio'),
          lastName: Yup.string().required('Este campo es obligatorio'),
          email: Yup.string().email('El email no es válido').required('Este campo es obligatorio'),
          password: Yup.string().required('Este campo es obligatorio'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
            .required('Este campo es obligatorio')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="mx-autoform">
            <div className="mb-3-input ">
              
              <Field type="text" name="name" className="form-control-input  " placeholder="Nombre" />
              <ErrorMessage name="name" component="div" className="error" />
=======
  return (
    <section id="registerform" className="registerform">
      <div className="container-form" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <h2 className="title">Regístrate</h2>
        <form className="mx-autoform formRegister">
          {fields.map((field) => (
            <div key={field.id} className="mb-3-input form-control">
              <label></label>
              <InputsRegister key={field.id} {...field} handleOnChange={handleFields} />
>>>>>>> 00622b1ce2c527dfc811623c3d40b4cfb3fa3350
            </div>
          ))}
          <div className='checkbox'>
            <label>
<<<<<<< HEAD
            <input type="checkbox" />
              <strong>Acepto los</strong> <a href="/terms" id="terminos"><strong>Términos y condiciones</strong></a>
              <p className="p-cookies">
                Después de acceder con éxito, se utiliza una cookie en su navegador para dar seguimiento a su sesión.
                Puede consultar nuestra <a href="/cookies">Politica de cookies </a> para más detalles. 

              </p>
            </label>
            </div>



            <button type="submit" disabled={isSubmitting} className="btn">
              Registrarse
            </button>
            

          </Form>
        )}
      </Formik>
    </div>
    </div>
=======
              <input type="checkbox" id='termschkbx' onChange={handleCheckboxChange}/>
              <p>Acepto los <a href="/terms" id="terminos"><strong>Términos y condiciones</strong></a></p>
            </label>
          </div>
          <p className="cookies">Después de acceder con éxito, se utiliza una cookie en su navegador para dar seguimiento a su sesión. Puede consultar nuestra <a href="/">Politica de cookies </a> para más detalles.</p>
          <button id='btnRegister' type="submit" onClick={sendDataCreate} className='btn btnRegister' disabled={!isChecked}>Registrarme</button>
        </form>        
      </div>
    </section>      
>>>>>>> 00622b1ce2c527dfc811623c3d40b4cfb3fa3350
  );
};

RegisterForm.propTypes = {};

export default RegisterForm