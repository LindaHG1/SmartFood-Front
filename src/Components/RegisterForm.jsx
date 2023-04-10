import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../assets/sass/components/_signinform.scss';




const RegisterForm = () => {
  return (
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
              <strong>Acepto los</strong> <a href="#" id="terminos"><strong>Términos y condiciones</strong></a>
              <p>
                Después de acceder con éxito, se utiliza una cookie en su navegador para dar seguimiento a su sesión.
                Puede consultar nuestra <a href="/">Politica de cookies </a> para más detalles. 

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
  );
};

export default RegisterForm;
