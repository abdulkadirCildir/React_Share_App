import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// const validate = (values) => {
//   //values.name  errors.name
//   let errors = {};
//   if (!values.name) errors.name = "Required";
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email format";
//   }
//   if (!values.company) errors.company = "Required";
//   return errors;
// };
const validate = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  company: Yup.string().max(15, "very long").required("Required"),
});
const initialValues = {
  name: "",
  email: "",
  company: "",
};
const onSubmit = (values) => {
  console.log("submit data", values);
};
function MyForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: validate,
  });
  //   console.log("formik--- formik.getFieldProps", formik.getFieldProps("name"));
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          //   value={formik.values.name}
          //   onChange={formik.handleChange}
          //   onBlur={formik.handleBlur}
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          //   value={formik.values.email}
          //   onChange={formik.handleChange}
          //   onBlur={formik.handleBlur}
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="form-control">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          //   value={formik.values.company}
          //   onChange={formik.handleChange}
          //   onBlur={formik.handleBlur}
          {...formik.getFieldProps("company")}
        />
        {formik.touched.company && formik.errors.company ? (
          <div className="error">{formik.errors.company}</div>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default MyForm;





// 2

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Error from "./Error";
const validate = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  company: Yup.string().max(15, "very long").required("Required"),
  bio: Yup.string().max(15, "very long").required("Required"),
});
const initialValues = {
  name: "",
  email: "",
  company: "",
  bio: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
};
const onSubmit = (values) => {
  console.log("submit data", values);
};
function MyForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validate}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={Error} />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component={Error} />
        </div>
        <div className="form-control">
          <label htmlFor="company">Company</label>
          <Field type="text" id="company" name="company" />
          <ErrorMessage name="company" component={Error} />
        </div>
        <div className="form-control">
          <label htmlFor="bio">Bio</label>
          <Field as="textarea" type="text" id="bio" name="bio" />
          <ErrorMessage name="bio" component={Error} />
        </div>
        <div className="form-control">
          <label htmlFor="facebook">facebook</label>
          <Field type="text" id="facebook" name="social.facebook" />
        </div>
        <div className="form-control">
          <label htmlFor="twitter">twitter</label>
          <Field type="text" id="twitter" name="social.twitter" />
        </div>
        <div className="form-control">
          <label htmlFor="primaryPh">primaryPh</label>
          <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
        </div>
        <div className="form-control">
          <label htmlFor="secondaryPh">secondaryPh</label>
          <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
export default MyForm;

