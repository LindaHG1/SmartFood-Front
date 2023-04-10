import '../../src/assets/sass/components/_loginform.scss';
import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AOS from 'aos';
import 'aos/dist/aos.css';



function LoginForm() {
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000 }); // inicializa AOS
  }, []);

  return (
    <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <div className="form">
        <h1 className="title_sesion">Inicia sesión</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Debes ingresar un correo electrónico';
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
              errors.email = 'El correo electrónico es inválido';
            }
            if (!values.password) {
              errors.password = 'Debes ingresar una contraseña';
            } else if (values.password.length < 8) {
              errors.password = 'La contraseña debe tener al menos 8 caracteres';
            }
            return errors;
          }}
          onSubmit={(values) => {
            // aquí puedes enviar los datos del formulario al servidor
            console.log(values);
          }}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <Form className='container' onSubmit={handleSubmit}>
              <Field
                className='input_descripcion' placeholder="Email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email && (
                <ErrorMessage name="email" component="div" className="error" />
              )}

              <Field
                className='input_descripcion' placeholder="Contraseña"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && touched.password && (
                <ErrorMessage name="password" component="div" className="error" />
              )}

              <button className='btn auto' type="submit">Enviar</button>
              <div>
                <p>¿Aún no tienes cuenta? <a href=""> Registrate Aquí</a></p>
              </div>

            </Form>

          )}

        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
