import '../assets/sass/components/_contactform.scss';
import React, { useState, useRef, useEffect } from 'react';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import AOS from "aos";
import 'aos/dist/aos.css'; 



const Formulario = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    useEffect(() => {
        AOS.init({duration:1000}); // inicializa AOS
    }, []);

    return (
        <>

            <Formik
                initialValues={{
                    nombre: '',
                    correo: '',
                    mensaje: ''
                }}
                validate={(valores) => {
                    let errores = {};

                    //validación nombre
                    if (!valores.nombre) {
                        errores.nombre = 'Por favor ingresa un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre = 'El nombre sólo puede contener letras y espacios'
                    }

                    //validacion correo
                    if (!valores.correo) {
                        errores.correo = 'Por favor ingresa un correo electrónico'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                        errores.correo = 'El correo sólo puede contener letras y espacios y debe mantener el formato correo@correo.com'
                    }

                    //validacion mensaje
                    if (!valores.mensaje) {
                        errores.mensaje = 'Por favor escriba un mensaje'
                    } else if (!/[a-zA-Z0-9]/.test(valores.mensaje)) {
                        errores.mensaje = 'El mensaje sólo puede contener letras y espacios'
                    }



                    return errores;

                }}
                //al darle al boton enviar
                onSubmit={(valores, { resetForm }) => {

                    resetForm();
                    // console.log('Formulario enviado');
                    cambiarFormularioEnviado(true);
                    setTimeout(() => cambiarFormularioEnviado(false), 5000);
                }}
            >
                {({ errors }) => (
                    
                    
                    <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <div className="h-100 p-5 text-bg-dark rounded-3">
                        <h1>CONTACTO</h1>
                        <Form className="mb-3">
                            <div>

                                <Field
                                    className="form-control"
                                    id="nombre"
                                    type="text"
                                    name="nombre"
                                    placeholder="Nombre"
                                />
                                <ErrorMessage name="nombre" component={() => (
                                    <div className='error'>{errors.nombre}</div>
                                )} />
                            </div>

                            <div>

                                <Field
                                    type="email"
                                    className="form-control"
                                    id="correo"
                                    name="correo"
                                    placeholder="Correo electrónico"
                                />
                                <ErrorMessage name="correo" component={() => (
                                    <div className='error'>{errors.correo}</div>
                                )} />
                            </div>

                            <div>

                                <Field
                                    className="form-control"
                                    id="mensaje"
                                    rows="3"
                                    name="mensaje"
                                    as="textarea"
                                    placeholder="Hola! Quisiera ponerme en contacto para/por..."
                                />
                                <ErrorMessage name="mensaje" component={() => (
                                    <div className='error'>{errors.mensaje}</div>
                                )} />
                            </div>



                            <div className="col-12">
                                <button className="btn btn-form" type="submit">Enviar</button>
                                {formularioEnviado && <p className='exito'>Mensaje enviado correctamente, gracias!</p>}
                            </div>
                        
                        </Form>
                        </div>
                        </div>
                
                )}


            </Formik>
        </>
    );
}

export default Formulario;
