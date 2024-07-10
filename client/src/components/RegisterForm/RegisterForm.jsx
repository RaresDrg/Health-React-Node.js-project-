import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  OrangeButton,
  WhiteButton,
} from "../common/FormButton/FormButton.styled";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({ className: styles }) => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const emailRegex = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be less than 50 characters long")
      .required("Required *"),
    email: Yup.string()
      .matches(emailRegex, { message: "Invalid email address" })
      .required("Required *"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(passwordRegex, {
        message: "Must include an uppercase, a lowercase and a digit",
      })
      .required("Required *"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password doesn't match")
      .required("Required *"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={styles}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <h1>Register</h1>

            <div className={`field ${errors.name ? "onError" : ""}`}>
              <label htmlFor="nameInput">Name *</label>
              <Field
                id="nameInput"
                type="text"
                name="name"
                placeholder="Please, enter your name !"
              />
              <div className="error">
                <ErrorMessage name="name" component="span" />
              </div>
            </div>

            <div className={`field ${errors.email ? "onError" : ""}`}>
              <label htmlFor="emailInput">Email *</label>
              <Field
                id="emailInput"
                type="email"
                name="email"
                placeholder="Please, enter your email !"
              />
              <div className="error">
                <ErrorMessage name="email" component="span" />
              </div>
            </div>

            <div className={`field ${errors.password ? "onError" : ""}`}>
              <label htmlFor="passwordInput">Password *</label>
              <Field
                id="passwordInput"
                type="password"
                name="password"
                placeholder="Please, enter your password !"
              />
              <div className="error">
                <ErrorMessage name="password" component="span" />
              </div>
            </div>

            <div
              className={`field ${
                errors.password || errors.confirmPassword ? "onError" : ""
              }`}
            >
              <label htmlFor="confirmPasswordInput">Confirm Password *</label>
              <Field
                id="confirmPasswordInput"
                type="password"
                name="confirmPassword"
                placeholder="Please, confirm your password !"
              />
              <div className="error">
                <ErrorMessage name="confirmPassword" component="span" />
              </div>
            </div>

            <div className="buttonWrapper">
              <OrangeButton
                type={"submit"}
                text={isSubmitting ? "Loading..." : "Register"}
                isDisabled={isSubmitting ? true : false}
                // handlerFunction={Trimite log in}
              />

              <WhiteButton
                type="button"
                text={"Log in"}
                handlerFunction={() => {
                  navigate("/login");
                }}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
