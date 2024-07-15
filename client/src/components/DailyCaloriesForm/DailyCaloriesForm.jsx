import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { CTAButton } from "../common/FormButton/FormButton.styled";
import { useDispatch } from "react-redux";
import {
  getDailyRate,
  updateUserWithDailyRate,
} from "../../redux/auth/operations";

import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const DailyCaloriesForm = ({ className: styles, openModal }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    document.addEventListener("wheel", stopIncrepementOnSroll);

    function stopIncrepementOnSroll() {
      if (document.activeElement.type === "number") {
        document.activeElement.blur();
      }
    }

    return () => {
      document.removeEventListener("wheel", stopIncrepementOnSroll);
    };
  });

  const validationSchema = Yup.object({
    height: Yup.number()
      .min(100, "Height must be between: 100 - 230 cm")
      .max(230, "Height must be between: 100 - 230 cm")
      .required("Required *")
      .integer("Round the value to the nearest integer"),
    age: Yup.number()
      .min(10, "Age must be between: 10 - 100 years")
      .max(100, "Age must be between: 10 - 100 years")
      .required("Required *")
      .integer("Round the value to the nearest integer"),
    currentWeight: Yup.number()
      .min(40, "Weight must be between: 40 - 160 kg")
      .max(160, "Weight must be between: 40 - 160 kg")
      .required("Required *")
      .integer("Round the value to the nearest integer"),
    desiredWeight: Yup.number()
      .min(40, "Weight must be between: 40 - 160 kg")
      .max(160, "Weight must be between: 40 - 160 kg")
      .required("Required *")
      .integer("Round the value to the nearest integer"),
    bloodType: Yup.string().oneOf(
      ["1", "2", "3", "4"],
      "Blood type can be either: 1, 2, 3, or 4"
    ),
  });

  const initialValues = {
    height: "",
    age: "",
    currentWeight: "",
    desiredWeight: "",
    bloodType: "1",
  };

  const handleSumbit = (values, formikBag) => {
    const { setSubmitting, resetForm } = formikBag;

    setSubmitting(true);

    dispatch(getDailyRate(values))
      .unwrap()
      .then((value) => {
        location.pathname === "/calculator"
          ? dispatch(
              updateUserWithDailyRate({
                dailyCalorieIntake: value.data.dailyCalorieIntake,
              })
            )
          : localStorage.setItem(
              "dailyCalorieIntake",
              value.data.dailyCalorieIntake
            );

        window.scrollTo({ top: 0, behavior: "smooth" });
        toast.success(value.message);
        resetForm();
        openModal();
      })
      .catch((error) => {
        const errorNotification =
          error?.response?.data?.message || "Internal server error";
        toast.error(errorNotification);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div className={styles}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSumbit}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <h1>Calculate your daily calorie intake right now</h1>

            <div className={`field ${errors.height ? "onError" : ""}`}>
              <label htmlFor="heightInput">Height *</label>
              <Field
                id="heightInput"
                type="number"
                name="height"
                placeholder="Enter your height in cm"
              />
              <div className="error">
                <ErrorMessage name="height" component="span" />
              </div>
            </div>

            <div className={`field ${errors.age ? "onError" : ""}`}>
              <label htmlFor="ageInput">Age *</label>
              <Field
                id="ageInput"
                type="number"
                name="age"
                placeholder="Enter your age"
              />
              <div className="error">
                <ErrorMessage name="age" component="span" />
              </div>
            </div>

            <div className={`field ${errors.currentWeight ? "onError" : ""}`}>
              <label htmlFor="currentWeightInput">Current weight *</label>
              <Field
                id="currentWeightInput"
                type="number"
                name="currentWeight"
                placeholder="Enter your current weight"
              />
              <div className="error">
                <ErrorMessage name="currentWeight" component="span" />
              </div>
            </div>

            <div className={`field ${errors.desiredWeight ? "onError" : ""}`}>
              <label htmlFor="desiredWeightInput">Desired weight *</label>
              <Field
                id="desiredWeightInput"
                type="number"
                name="desiredWeight"
                placeholder="Enter your desired weight"
              />
              <div className="error">
                <ErrorMessage name="desiredWeight" component="span" />
              </div>
            </div>

            <div className={`radioField }`}>
              <p>Blood type *</p>

              <div>
                <label htmlFor="one">1</label>
                <Field id="one" value="1" type="radio" name="bloodType" />
              </div>

              <div>
                <label htmlFor="two">2</label>
                <Field id="two" value="2" type="radio" name="bloodType" />
              </div>

              <div>
                <label htmlFor="three">3</label>
                <Field id="three" value="3" type="radio" name="bloodType" />
              </div>

              <div>
                <label htmlFor="four">4</label>
                <Field id="four" value="4" type="radio" name="bloodType" />
              </div>
            </div>

            <CTAButton
              type={"submit"}
              text={isSubmitting ? "Loading..." : "Calculate"}
              isDisabled={isSubmitting ? true : false}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DailyCaloriesForm;
