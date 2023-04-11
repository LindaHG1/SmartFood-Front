import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../assets/sass/components/_signinform.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';




const RegisterForm = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // inicializa AOS
  }, []);

  return (
    <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
    <div className="container-form">
      <h1 className="title">Formulario de registro</h1>

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
            </div>

            <div className="mb-3-input">
              
              <Field type="text" name="lastName" className="form-control-input" placeholder="Apellidos" />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>

            <div className="mb-3-input">
              
              <Field type="email" name="email" className="form-control-input form-control-lg" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="mb-3-input">
              
              <Field type="password" name="password" className="form-control-input form-control-lg" placeholder="Contraseña" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="mb-3-input">
              
              <Field type="password" name="confirmPassword" className="form-control-input" placeholder="Confirmar Contraseña" />
              <ErrorMessage name="confirmPassword" component="div" className="error" />
            </div>

            <div className="mb-3-input">
              
              <Field type="text" name="address" className="form-control-input" placeholder="Dirección Opcional"/>
            </div>
            <div className='checkbox'>
            <label>
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
  );
};

export default RegisterForm;
