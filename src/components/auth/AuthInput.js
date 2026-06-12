import React from "react";
 
export default function AuthInput({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  autoComplete,
  required,
  icon,
}) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
 
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;
 
  return (
    <div style={styles.group}>
      <label htmlFor={name} style={styles.label}>
        {label}
      </label>
      <div
        style={{
          ...styles.inputWrap,
          ...(focused ? styles.inputWrapFocused : {}),
        }}
      >
        {/* Left icon */}
        {icon && (
          <span style={styles.iconLeft}>
            <i className={`fas ${icon}`} style={styles.iconStyle} aria-hidden="true" />
          </span>
        )}
 
        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            ...styles.input,
            paddingLeft: icon ? "44px" : "14px",
            paddingRight: isPassword ? "44px" : "14px",
          }}
        />
 
        {/* Eye toggle for password */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={styles.eyeBtn}
            tabIndex={-1}
            aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
          >
            <i
              className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              style={{ fontSize: "14px", color: "#a5b4fc" }}
              aria-hidden="true"
            />
          </button>
        )}
      </div>
    </div>
  );
}
 
const styles = {
  group: {
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    fontSize: "11px",
    fontWeight: "700",
    color: "#374151",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "6px",
  },
  inputWrap: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    border: "1.5px solid #e0e7ff",
    borderRadius: "12px",
    background: "#f5f5ff",
    transition: "border-color 0.15s, box-shadow 0.15s",
  },
  inputWrapFocused: {
    borderColor: "#6366F1",
    background: "#ffffff",
    boxShadow: "0 0 0 3px rgba(99,102,241,0.12)",
  },
  iconLeft: {
    position: "absolute",
    left: "14px",
    display: "flex",
    alignItems: "center",
    pointerEvents: "none",
  },
  iconStyle: {
    fontSize: "15px",
    color: "#a5b4fc",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    border: "none",
    borderRadius: "12px",
    fontSize: "14px",
    color: "#1e1b4b",
    background: "transparent",
    fontFamily: "inherit",
    outline: "none",
  },
  eyeBtn: {
    position: "absolute",
    right: "13px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};