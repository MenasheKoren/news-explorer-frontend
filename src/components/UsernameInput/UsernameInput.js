export function UsernameInput({ onChange, userName }) {
  return (
    <label htmlFor="usernameInput" className="form__label">
      Username
      <input
        type="username"
        className="field-input "
        placeholder="Enter username"
        id="usernameInput"
        name="username"
        defaultValue={userName || ""}
        onChange={onChange}
        required
      />
      <span className="error-message" id="username-input-error" />
    </label>
  );
}
