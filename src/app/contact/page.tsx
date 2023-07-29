"use client";

import Link from "next/link";
import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
export default function contact() {
  const router = useRouter();
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
      router.push("/");
    } catch (error: any) {
      console.log("on contact page failed", error.mesage);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
    <h1 className="text-3xl font-bold my-4">Any Enquiry regarding Website</h1>
    <p className="mb-4">24*7 hour we are here to help you</p>
    <h1 className="text-2xl font-bold"> Contact Us </h1>
    <hr className="w-20 h-1 bg-blue-500 my-2" />



<form onSubmit={formik.handleSubmit} className="my-4 w-1/2">
  <div className="mb-4">
    <label htmlFor="firstname" className="block font-bold mb-1">
      First Name
    </label>
    <input
      id="firstname"
      name="firstname"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.firstname}
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
    />
    {formik.errors.firstname && formik.touched.firstname && (
      <div className="text-red-500">{formik.errors.firstname}</div>
    )}
  </div>

  <div className="mb-4">
    <label htmlFor="lastname" className="block font-bold mb-1">
      Last Name
    </label>
    <input
      id="lastname"
      name="lastname"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.lastname}
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
    />
    {formik.errors.lastname && formik.touched.lastname && (
      <div className="text-red-500">{formik.errors.lastname}</div>
    )}
  </div>

  <div className="mb-4">
    <label htmlFor="email" className="block font-bold mb-1">
      Email Address
    </label>
    <input
      id="email"
      name="email"
      type="email"
      onChange={formik.handleChange}
      value={formik.values.email}
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
    />
    {formik.errors.email && formik.touched.email && (
      <div className="text-red-500">{formik.errors.email}</div>
    )}
  </div>

  <div className="mb-4">
    <label htmlFor="website" className="block font-bold mb-1">
      Website
    </label>
    <input
      id="website"
      name="website"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.website}
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
    />
    {formik.errors.website && formik.touched.website && (
      <div className="text-red-500">{formik.errors.website}</div>
    )}
  </div>

  <div className="mb-4">
    <label htmlFor="message" className="block font-bold mb-1">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      onChange={formik.handleChange}
      value={formik.values.message}
      rows="4"
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
    />
    {formik.errors.message && formik.touched.message && (
      <div className="text-red-500">{formik.errors.message}</div>
    )}
  </div>

  <button
    type="submit"
    className="w-full px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
  >
    Submit
  </button>
</form>




    <Link href="/api/auth/login" className="mt-4 text-blue-500 hover:underline">
      Visit Login Page
    </Link>
  </div>
  );
}
