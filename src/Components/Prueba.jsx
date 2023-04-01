import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/sass/components/_prueba.scss';




const Prueba = () => {
const ref= useRef();
const [success, setSuccess] = useState(null);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  // Verificar que los campos requeridos estén completos
  if (!name || !email || !message) {
    alert("o pones todos los datos o aqui no llames");
    return;
  }

  // Verificar que el correo electrónico tenga un formato válido
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Si todo está bien, enviar el formulario
  form.submit();


  emailjs.sendForm('service_x726ada', 'template_jzdg4em', ref.current, 'w6oKIMhJ71y3VuOmb')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
          setSuccess(false);
      });

};
  return (
    <div className='Section'>
      <div className='Container'>
        <div className='Left'>
          <h1 className='Title'></h1>
          <form className='Form' ref={ref}   onSubmit={handleSubmit}>
            <div className='prueba'>
            <input className='Input' placeholder='Name' name="name"/>
            <input className='Input' placeholder='Email' name="email"/>
            </div>
             <textarea className= 'TextArea' placeholder='Write your message' name="message" rows={12}/>
            <button className='Button' type="submit">Send</button>
            {success && 
            "Your message has been sent. I will reach to you soon :)"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Prueba