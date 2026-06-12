import React from "react";
import { Link } from "react-router-dom";
import AuthShell from "components/auth/AuthShell.js";
import AuthInput from "components/auth/AuthInput.js";
import AuthButton from "components/auth/AuthButton.js";
 
export default function Login() {
  const [form, setForm] = React.useState({ email: "", password: "" });
  const [loading, setLoading] = React.useState(false);
 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
  };
 
  return (
    <AuthShell
      title="Bon retour !"
      subtitle="Connectez-vous à votre espace MedTrust"
      sectionLabel="Identifiants"
      footer={
        <>
          Pas encore de compte ?{" "}
          <Link to="/auth/register" style={styles.link}>
            S'inscrire
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit}>
        <AuthInput
          label="E-mail"
          name="email"
          type="email"
          placeholder="vous@exemple.com"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          required
          icon="fa-envelope"
        />
        <AuthInput
          label="Mot de passe"
          name="password"
          type="password"
          placeholder="Votre mot de passe"
          value={form.password}
          onChange={handleChange}
          autoComplete="current-password"
          required
          icon="fa-lock"
        />
 
        {/* Remember me + forgot */}
        <div style={styles.rowBetween}>
          <label style={styles.checkRow}>
            <input type="checkbox" style={styles.checkbox} />
            <span>Se souvenir de moi</span>
          </label>
          <Link to="/auth/forget" style={styles.link}>
            Mot de passe oublié ?
          </Link>
        </div>
 
        <AuthButton type="submit" loading={loading}>
          Se connecter
        </AuthButton>
      </form>
    </AuthShell>
  );
}
 
const styles = {
  rowBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1.25rem",
  },
  checkRow: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    fontSize: "13px",
    color: "#6b7280",
    cursor: "pointer",
  },
  checkbox: {
    width: "14px",
    height: "14px",
    accentColor: "#6366F1",
    cursor: "pointer",
  },
  link: {
    color: "#6366F1",
    fontWeight: "600",
    fontSize: "13px",
    textDecoration: "none",
  },
};