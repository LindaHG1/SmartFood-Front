import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../assets/sass/components/_singinform.scss';




const RegisterForm = () => {
  return (
    <div className="rounded-3">
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
          <Form className="mx-auto">
            <div className="mb-3">
              
              <Field type="text" name="name" className="form-control" placeholder="Nombre" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="mb-3">
              
              <Field type="text" name="lastName" className="form-control" placeholder="Apellidos" />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>

            <div className="mb-3">
              
              <Field type="email" name="email" className="form-control" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="mb-3">
              
              <Field type="password" name="password" className="form-control" placeholder="Contraseña" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="mb-3">
              
              <Field type="password" name="confirmPassword" className="form-control" placeholder="Confirmar Contraseña" />
              <ErrorMessage name="confirmPassword" component="div" className="error" />
            </div>

            <div className="mb-3">
              
              <Field type="text" name="address" className="form-control" placeholder="Dirección Opcional"/>
            </div>

            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
              Registrarse
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
