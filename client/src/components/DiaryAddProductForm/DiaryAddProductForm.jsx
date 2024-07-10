import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  OrangeButton,
  WhiteButton,
} from "../common/FormButton/FormButton.styled";
import AsyncSelect from "react-select/async";

import { useMediaQuery } from "react-responsive";
import StyledAddProductBtn from "../AddProductBtn/AddProductBtn.styled";

const DiaryAddProductForm = ({ className: styles, closeModal }) => {
  const productsOptions = [
    "Mere",
    "Pere",
    "Cacat",
    "Pisat",
    "Banane",
    "Salam",
    "Pere",
    "Cacat",
    "Pisat",
    "Banane",
    "Salam",
    "Pere",
    "Cacat",
    "Pisat",
    "Banane",
    "Salam",
    "Pere",
    "Cacat",
    "Pisat",
    "Banane",
    "Salam",
  ];

  const productsOptionsFormat = productsOptions.map((item) => ({
    value: item,
    label: item,
  }));

  const initialValues = {
    productName: "",
    grams: "",
  };

  const validationSchema = Yup.object({
    productName: Yup.string().required("Required *"),
    grams: Yup.number()
      .min(20, "minimum quantity is 20 grams")
      .max(2000, "Maximum quantity is 2000 grams")
      .required("Required *"),
  });

  const loadOptions = (searchValue, callback) => {
    // todo: => aici i-au datele din db
    // const data = api.getData()
    // const data = productsOptions;

    // const optionsFormat = data.map((item) => {
    //   return { value: item, label: item };
    // });

    const filteredOptions = productsOptionsFormat.filter((item) =>
      item.label.toLowerCase().includes(searchValue.toLowerCase())
    );

    callback(filteredOptions);
  };

  const handleSumbit = async (values, errors) => {
    // todo:
    // setSubmitting(true);
    // props.resetForm();

    await new Promise((resolve) => setTimeout(resolve, 5000));

    console.log("values", values);
    console.log("errors:", errors);
    // openModal(true);
  };

  const isOnMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isNotOnMobile = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className={styles}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSumbit}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <div className={`field ${errors.productName ? "onError" : ""}`}>
              <label htmlFor="productsInput">Product name *</label>

              <Field name="productName" id="productsInput">
                {(props) => (
                  <AsyncSelect
                    onFocus={() => {
                      props.form.setFieldTouched("productName", true, true);
                    }}
                    onChange={(value) => {
                      props.form.setFieldValue("productName", value.value);
                    }}
                    noOptionsMessage={() => "No product found"}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    name="productName"
                    loadOptions={loadOptions}
                    defaultOptions={productsOptionsFormat}
                    placeholder="Enter product name"
                  />
                )}
              </Field>
              <div className="error">
                <ErrorMessage name="productName" component="span" />
              </div>
            </div>

            <div className={`field ${errors.grams ? "onError" : ""}`}>
              <label htmlFor="gramsInput">Grams *</label>
              <Field
                id="gramsInput"
                type="number"
                name="grams"
                placeholder="Enter the quantity of product"
              />
              <div className="error">
                <ErrorMessage name="grams" component="span" />
              </div>
            </div>

            {isOnMobile && (
              <div className="buttonWrapper">
                <OrangeButton
                  text="Add"
                  type="submit"
                  isDisabled={isSubmitting ? true : false}
                  // todo: => adaugat produs in db
                  // handlerFunction={}
                />

                <WhiteButton
                  text="Cancel"
                  type="button"
                  handlerFunction={() => closeModal()}
                />
              </div>
            )}

            {isNotOnMobile && (
              <StyledAddProductBtn
                type={"submit"}
                isDisabled={isSubmitting ? true : false}
                /*handlerFunction={}}  */
              />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DiaryAddProductForm;
