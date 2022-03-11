import { EmailInput } from "../EmailInput/EmailInput";
import { PasswordInput } from "../PasswordInput/PasswordInput";
import { UsernameInput } from "../UsernameInput/UsernameInput";
import { SaveFormButton } from "../SaveFormButton/SaveFormButton";
import React from "react";

function EntryForm({
  email,
  onChange,
  onChange1,
  onChange2,
  onSubmit,
  password,
  userName,
}) {
  return (
    <form className="entry__form" onSubmit={onSubmit}>
      <EmailInput email={email} onChange={onChange} />
      <PasswordInput password={password} onChange={onChange1} />
      <UsernameInput userName={userName} onChange={onChange2} />
      <SaveFormButton />
    </form>
  );
}
