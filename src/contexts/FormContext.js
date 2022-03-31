import { createContext, useState } from "react";

export const FormContext = createContext();

export default ({ children }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formData = {
    username: [username, setUsername],
    email: [email, setEmail],
    password: [password, setPassword],
  };

  return (
    <FormContext.Provider value={formData}>{children}</FormContext.Provider>
  );
};
