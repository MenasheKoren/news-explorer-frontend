import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import { EmailInput } from "../EmailInput/EmailInput";
import { PasswordInput } from "../PasswordInput/PasswordInput";
import { UsernameInput } from "../UsernameInput/UsernameInput";
import { SaveFormButton } from "../SaveFormButton/SaveFormButton";

export default function Register({
  handleInputEmail,
  handleInputPassword,
  userName,
  email,
  password,
  handleSubmitRegister,
  handleInputUsername,
}) {
  return (
    <section className={`entry entry_type_signup`}>
      <h2 className="entry__title">Sign up</h2>
      <form className="entry__form" onSubmit={handleSubmitRegister}>
        <EmailInput email={email} onChange={handleInputEmail} />
        <PasswordInput password={password} onChange={handleInputPassword} />
        <UsernameInput userName={userName} onChange={handleInputUsername} />
        <SaveFormButton />
      </form>
      <Link to={<Login />} className="link link__hover entry__redirect-text">
        Already a member? Log in here!
      </Link>
    </section>
  );
}
