"use client";
import React, { SyntheticEvent, useState } from "react";
import { BsButton } from "@/components/Button/BsButton";
import { BsInput } from "@/components/Input/BsInput";
import { BsSelect } from "@/components/Select/BsSelect";
import { postSignin } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch<any>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await useDispatch(
      postSignin({
        email: email,
        password: password,
      })
    );
  };
  return (
    <main className="container h-screen">
      <h1 className="text-baseBlack text-6xl font-semibold leading-[42px] my-8 md:text-center">
        Account
      </h1>
      <div className="max-w-[400px] mx-auto">
        <form action="">
          <div className="mb-8">
            <BsInput
              inputType="text"
              label="E-mail"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="mb-12">
            <BsInput
              inputType="password"
              label="Password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <div className="mb-12">
            <BsSelect label="Location" />
          </div>
          <div className="mb-8">
            <BsButton label="SingIn" btnType="submit" onClick={onSubmit} />
          </div>
        </form>
      </div>
    </main>
  );
}
