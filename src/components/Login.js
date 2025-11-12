import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex' }}>
              <h4>Email:</h4>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                style={{
                  height: '15px',
                  marginTop: '20px',
                  marginLeft: '32px',
                }}
              />
              {errors.email && touched.email && errors.email}
            </div>
            <div style={{ display: 'flex' }}>
              <h4>Password:</h4>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                style={{
                  height: '15px',
                  marginTop: '20px',
                  marginLeft: '10px',
                }}
              />
              {errors.password && touched.password && errors.password}
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
