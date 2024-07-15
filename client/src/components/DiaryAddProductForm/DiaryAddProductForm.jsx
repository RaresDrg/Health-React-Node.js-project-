import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AsyncSelect from "react-select/async";
import useResponsive from "../../hooks/useResponsive";

import StyledAddProductBtn from "../AddProductBtn/AddProductBtn.styled";
import {
  OrangeButton,
  WhiteButton,
} from "../common/FormButton/FormButton.styled";
import {
  addDiaryDateProduct,
  getPossibleProducts,
} from "../../redux/diary/operations";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const DiaryAddProductForm = ({ className: styles, closeModal }) => {
  const [products, setProducts] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const possibleProducts = await getPossibleProducts();

        setProducts(possibleProducts);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchProducts();
  }, []);

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

  async function loadOptions(searchValue, callback) {
    await new Promise((resolve) => setTimeout(resolve, 250));

    const productsOptionsFormat = products.map((item) => ({
      value:
        item.title.charAt(0).toUpperCase() + item.title.slice(1).toLowerCase(),
      label:
        item.title.charAt(0).toUpperCase() + item.title.slice(1).toLowerCase(),
    }));

    const filteredOptions = productsOptionsFormat.filter((item) =>
      item.label.toLowerCase().includes(searchValue.toLowerCase())
    );

    callback(filteredOptions);
  }

  const handleSumbit = async (values, formikBag) => {
    const { setSubmitting, resetForm } = formikBag;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const name = values.productName;
    const grams = values.grams;
    const kcalPer100 = products.find(
      (item) => item.title.toLowerCase() === name.toLowerCase()
    ).calories;
    const kcal = (kcalPer100 / 100) * grams;

    dispatch(addDiaryDateProduct({ name, grams, kcal }))
      .unwrap()
      .then((value) => {
        closeModal && closeModal();
        toast.success(value.message);
        setSelectedOption(null);
        resetForm();
      })
      .catch((error) => {
        const errorNotification =
          error?.response?.data?.message || "Internal server error";
        toast.error(errorNotification);
      })
      .finally(() => setSubmitting(false));
  };

  const { isOnMobile, isNotOnMobile } = useResponsive();

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
                      props.form.setFieldValue("productName", "");
                      setSelectedOption(null);
                    }}
                    onChange={(value) => {
                      props.form.setFieldValue("productName", value.value);
                      setSelectedOption(value);
                    }}
                    noOptionsMessage={() => "No product found"}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    name="productName"
                    loadOptions={loadOptions}
                    placeholder="Enter product name"
                    value={selectedOption}
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
              />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DiaryAddProductForm;
