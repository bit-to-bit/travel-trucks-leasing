import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import css from "./BookingForm.module.css";
const BookingForm = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    bookingDate: Yup.date().required("Required"),
    comment: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    toast(
      <>
        Dear {values.name}, Thank you!
        <br />
        <br />
        Your application has been accepted.
        <br />
        We will contact you soon.
      </>,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    resetForm();
  };

  return (
    <div className={css.booking}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className={css.formFields}>
            <div>
              <Field
                name="name"
                placeholder="Name*"
                className={css.formInput}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={css.formError}
              />
            </div>

            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email*"
                className={css.formInput}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.formError}
              />
            </div>

            <div>
              <DatePicker
                selected={values.bookingDate}
                onChange={(date) => setFieldValue("bookingDate", date)}
                placeholderText="Booking date*"
                className={css.formInput}
                dateFormat="dd/MM/yyyy"
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={css.formError}
              />
            </div>

            <div>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                rows="3"
                className={css.formInput}
              />
            </div>

            <button type="submit" className={css.formButton}>
              Send
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};
export default BookingForm;
