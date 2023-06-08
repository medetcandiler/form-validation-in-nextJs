"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaExclamationTriangle } from "react-icons/fa";


const userSchema = yup
  .object({
    firstName: yup.string().required('Please provide your first name'),
    lastName: yup.string().required('Please provide your last name'),
    mail: yup.string().email("must be valid email").required('Please provide your mail adress'),
    phone: yup
      .string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Enter a valid phone number"
      )
      .required('Please provide your phone number'),
    adress: yup.string().required('Please provide your adress'),
  })
  .required();

function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="container mx-auto h-screen grid place-content-center ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative z-0 w-96 mb-6 group">
          <input
            {...register("firstName")}
            // aria-invalid={errors.firstName ? "true" : "false"}
            className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            First Name
          </label>
          {/* {errors.firstName?.type === "required" && (
            <p className="text-sm text-red-600 mt-1">First name is required</p>
          )} */}
          {errors.firstName?.message && (
            <div className="flex items-center justify-center gap-2 text-sm text-red-500 mt-1">
              {<FaExclamationTriangle />}{errors.firstName?.message}
            </div>
          )}
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register("lastName")}
            className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Last Name
          </label>
          {/* {errors.lastName?.type === "required" && (
            <p className="text-sm mt-1  text-red-500">Last name is required</p>
          )} */}
          {errors.lastName?.message && (
            <div className="flex items-center justify-center gap-2 text-sm text-red-500 mt-1">
              {<FaExclamationTriangle />}{errors.lastName?.message}
            </div>
          )}
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register("mail")}
            className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Email
          </label>
          {/* {errors.mail?.type === "required" && (
            <p className="text-sm mt-1  text-red-500">Mail is required</p>
          )} */}
          {errors.mail?.message && (
            <div className="flex items-center justify-center gap-2 text-sm text-red-500 mt-1">
              {<FaExclamationTriangle />}{errors.mail?.message}
            </div>
          )}
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register("phone")}
            className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Phone Number
          </label>
          {/* {errors.phone?.type === "required" && (
            <p className="text-sm mt-1  text-red-500">
              Phone number is required
            </p>
          )} */}
          {errors.phone?.message && (
            <div className="flex items-center justify-center gap-2 text-sm text-red-500 mt-1">
              {<FaExclamationTriangle />}{errors.phone?.message}
            </div>
          )}
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register("adress")}
            className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Adress
          </label>
          {/* {errors.adress?.type === "required" && (
            <p className="text-sm mt-1  text-red-500 ">Adress is required</p>
          )} */}
          {errors.adress?.message && (
            <div className="flex items-center justify-center gap-2 text-sm text-red-500 mt-1">
              {<FaExclamationTriangle />}{errors.adress?.message}
            </div>
          )}
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <p className="text-gray-200 mb-1">Choose your gender:</p>
          <select
            {...register("gender", { required: true })}
            aria-invalid={errors.gender ? "true" : "false"}
            className="bg-gray-50 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
          {errors.gender?.type === "required" && (
            <p className="text-sm text-red-500 mt-1">
              You have to choose your gender
            </p>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
