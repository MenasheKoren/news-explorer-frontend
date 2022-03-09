export function PasswordInput(props) {
  return (
    <label htmlFor="passwordInput" className="form__label">
      Password
      <input
        type="password"
        className="field-input"
        placeholder="Password"
        id="passwordInput"
        name="password"
        defaultValue={props.password || ""}
        onChange={props.onChange}
        required
        minLength="2"
        maxLength="40"
        pattern=".*\S.*"
      />
      <span className="error-message" id="password-input-error"></span>
    </label>
  );
}
