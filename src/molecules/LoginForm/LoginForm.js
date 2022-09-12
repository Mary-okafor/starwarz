import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const navigate = useNavigate();
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [focus, setFocus] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { type, value } = e.target;
    setFormValues({ ...formValues, [type]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit)
      console.log(formValues);
  }, [formErrors]);

  const validateForm = (values) => {
    const errors = {};
    const letterCheckRegex = /[a-zA-Z][0-9]/;
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!values.email) {
      errors.email = "email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    if (!values.password) {
      errors.password = "password is required!";
    } else if (values.password.length < 8) {
      errors.password = "password must be at least 8 chars long";
    } else if (!letterCheckRegex.test(values.password)) {
      errors.password = "Password must contain letters and numbers";
    }
    return errors;
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.loginFormText}>Login</div>
        <span className={styles.loginFormText2}>
          Kindly enter your details to login
        </span>

        <div className={styles.labelContainer}>
          <label className={styles.loginFormLabel}>
            <input
              onFocus={() => setFocus(true)}
              type="email"
              placeholder="Email Address"
              className={styles.loginFormInput}
              id="input"
              value={formValues.email}
              onChange={handleChange}
            />
            <span
              className={styles.loginFormSpan}
              id={focus ? "input-email" : ""}
            >
              Email Address
            </span>
          </label>
        </div>
        <p className={styles.loginFormErrorText}> {formErrors.email} </p>

        <div className={styles.labelContainer2}>
          <label className={styles.loginFormLabel}>
            <input
              type="password"
              onFocus={() => setFocus(true)}
              placeholder="Password"
              className={styles.loginFormInput}
              id="input"
              value={formValues.password}
              onChange={handleChange}
            />
            <span
              className={styles.loginFormSpan}
              id={focus ? "input-password" : ""}
            >
              Password
            </span>
          </label>
        </div>
        <p className={styles.loginFormErrorText}> {formErrors.password} </p>

        <div className={styles.btnDiv}>
          <button type="submit" className={styles.loginFormBtn}  onClick={() => navigate('/Overview')}>
            Log in
          </button>
        </div>

        <div className={styles.loginFormPasswordText}>
          Forgot your password?
        </div>

        <div className={styles.loginFormFooterContainer}>
          <span className={styles.loginFormFooterText}>Privacy Policy</span>
          <span>and</span>
          <span className={styles.loginFormFooterText}>Terms of service</span>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
