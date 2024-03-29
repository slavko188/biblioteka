import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService.js";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loggedUser } from "../store/userSlice.js";

function AuthPages() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Obavezno ispuniti polje"),
      lastName: Yup.string().required("Obavezno ispuniti polje"),
      mobile: Yup.string().required("Obavezno ispuniti polje"),
      email: Yup.string().required("Obavezno ispuniti polje"),
      password: Yup.string().required("Obavezno ispuniti polje"),
      confirmPassword: Yup.string().required("Obavezno ispuniti polje"),
      adress: Yup.string().required("Obavezno ispuniti polje"),
    }),
    onSubmit: (values) => {
      UserService.signUpUser(values)
        .then((res) => {
          console.log(res);
          dispatch(loggedUser(res.data));
        })
        .catch((err) => console.log(err));
      navigate("/home");

      formik.resetForm();
    },
  });

  return (
    <div>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form
          onSubmit={formik.handleSubmit}
          className=" w-[300px] bg-white rounded-lg shadow-md p-3"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="text"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="text"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Telefon
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="text"
                required
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Password
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Confirm Password
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="password"
                name="confirmPassword"
                value={formik.values.confirm}
                onChange={formik.handleChange}
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Address
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="string"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              <button
                className="appearance-none block w-full bg-blue-600
                 text-gray-100 font-bold border
                 border-gray-200 rounded-lg py-3 px-3 leading-tight
                 hover:bg-blue-500 focus:outline-none focus:bg-white
                  focus:border-gray-500"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthPages;
