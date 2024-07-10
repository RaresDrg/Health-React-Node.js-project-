import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  OrangeButton,
  WhiteButton,
} from "../common/FormButton/FormButton.styled";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ className: styles }) => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const emailRegex = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(emailRegex, { message: "Invalid email address" })
      .required("Required *"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(passwordRegex, {
        message: "Password must include an uppercase, a lowercase and a digit",
      })
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
            <h1>Log in</h1>

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

            <div className="buttonWrapper">
              <OrangeButton
                type={"submit"}
                text={isSubmitting ? "Loading..." : "Log in"}
                isDisabled={isSubmitting ? true : false}
                // handlerFunction={Trimite log in}
              />

              <WhiteButton
                type="button"
                text={"Register"}
                handlerFunction={() => navigate("/register")}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
