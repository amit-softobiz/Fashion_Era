"use client"

import Link from "next/link";
import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
export default function contact() {
  const router = useRouter();

  // const [user, setUser] = React.useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   website: "",
  //   message: "",
  // });
  // const [user, setUser] = React.useState();
  const contactSchma = Yup.object().shape({
    firstname: Yup.string()
      .min(3, "Too Short")
      .max(20, "To Long")
      .required("Required"),
    lastname: Yup.string()
      .min(3, "Too Short")
      .max(20, "To Long")
      .required("Required"),
    email: Yup.string().email("invalid Email").required("Required"),
    website: Yup.string()
      .min(3, "Too Short")
      .max(20, "To Long")
      .required("Required"),
    message: Yup.string()
      .min(3, "Too Short")
      .max(20, "To Long")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      website: "",
      message: "",
    },
    validationSchema: contactSchma,

    onSubmit: (values) => {
      onContact(values);
    },
  });

  const onContact = async (user: any) => {
    try {
      const response = await axios.post("/api/contact", user);
      console.log("i am in the try block");
      router.push("/");
    } catch (error: any) {
      console.log("on contact page failed", error.mesage);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Contact form page</h1>
      <p>24*7 hour we are here to help you </p>
      <h1>Form for contact us</h1>
      <hr />

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          id="firstname"
          name="firstname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstname}
        />
        {formik.errors.firstname && formik.touched.firstname && (
          <div>{formik.errors.firstname}</div>
        )}
        <label htmlFor="lastname">Last Name</label>
        <input
          id="lastname"
          name="lastname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastname}
        />
        {formik.errors.lastname && formik.touched.lastname && (
          <div>{formik.errors.lastname}</div>
        )}
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <div>{formik.errors.email}</div>
        )}
        <label htmlFor="website">website</label>
        <input
          id="website"
          name="website"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.website}
        />
        {formik.errors.website && formik.touched.website && (
          <div>{formik.errors.website}</div>
        )}
        <label htmlFor="message">message</label>
        <input
          id="message"
          name="message"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.message}
        />
        {formik.errors.message && formik.touched.message && (
          <div>{formik.errors.message}</div>
        )}
        <button type="submit">Submit</button>
      </form>
      <Link href="/api/auth/login">Visit Login Page</Link>
    </div>
  );
}
