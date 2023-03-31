import '../../src/assets/sass/components/_loginform.scss';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


function LoginForm() {
  const [passwordError, setPasswordError] = useState('');

  // maneja el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // aquí puedes enviar los datos del formulario al servidor
  };

  return (
    <div className="rounded-3">
      <h1 className="title">Inicia sesión</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          // aquí puedes enviar los datos del formulario al servidor
          console.log(values);
        }}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <Form className='mb-3' onSubmit={handleSubmit}>
            <label>
              Email:
              <Field
                className='form-control'
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Contraseña:
              <Field
                className='form-control'
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </label>
            <ErrorMessage name="password" component="div" className="error" />
            <br />
            <button className='btn-primary mx-auto' type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm