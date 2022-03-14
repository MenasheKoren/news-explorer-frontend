export function PasswordInput({ onChange, password }) {
  return (
    <label htmlFor="passwordInput" className="form__label">
      Password
      <input
        type="password"
        className="field-input"
        placeholder="Enter password"
        id="passwordInput"
        name="password"
        defaultValue={password || ""}
        onChange={onChange}
        required
        minLength="2"
        maxLength="40"
        pattern=".*\S.*"
      />
      <span className="error-message" id="password-input-error" />
    </label>
  );
}
