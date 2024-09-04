import SecButton from "@/components/Buttons/secButton";
import React from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit, watch, formState: { errors }, } = useForm();

  const formSubmit = (data) => console.log(data)

  console.log(watch('userName'));
  console.log('errors  =>  ', errors);

  return (
    <form className="w-full text-center" action="" onSubmit={handleSubmit(formSubmit)}>
      <p className="text-[13px] font-[400] text-[#3D3D3D]">
        Enter your username and password to login.
      </p>

      <input
        {...register("userName", { required: 'Fill this field', pattern: /^[A-Za-z]+$/i })}
        className="border-[1px] border-[#EAEAEA] my-3 w-full rounded-[5px] py-3 px-[14px] text-[#A5A5A5] outline-none"
        type={"text"}
        placeholder={"Username or email address"}
      />
      {
        errors.userName && <span className='text-red-600'>{errors.userName.message || "Name doesn't consist numbers"}</span>
      }
      <input
        {...register("age", { required: 'Age is required', pattern: /^\d+$/ })}
        className="border-[1px] border-[#EAEAEA] my-3 w-full rounded-[5px] py-3 px-[14px] text-[#A5A5A5] outline-none"
        type={"text"}
        placeholder={"Enter your age ..."}
      />
      {
        errors.age && <span className='text-red-600'>Age must be integer</span>
      }
      <input
        {...register("password", { required: true })}
        className="border-[1px] border-[#EAEAEA] my-3 w-full rounded-[5px] py-3 px-[14px] text-[#A5A5A5] outline-none"
        type={"password"}
        placeholder={"Password"}
      />
      {
        errors.password && <span className='text-red-600'>This filed is required</span>
      }

      <SecButton text={"Login"} />

      <p className="text-end mt-6 text-[14px] font-[400] text-[#46A358] cursor-pointer">
        Forgot Password?
      </p>
    </form>
  );
}

export default LoginForm;
