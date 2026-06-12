import React from "react";
import { Link } from "react-router-dom";
import AuthShell from "components/auth/AuthShell.js";
import AuthInput from "components/auth/AuthInput.js";
import AuthButton from "components/auth/AuthButton.js";
 
export default function Forget() {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 800);
  };
 
  if (sent) {
    return (
      <AuthShell
        title=""
        footer={
          <Link to="/auth/login" style={styles.link}>
            ← Retour à la connexion
          </Link>
        }
      >
        <div style={styles.successBox}>
          <div style={styles.successIcon}>
            <i className="fas fa-envelope-open-text" style={styles.successIconI} aria-hidden="true" />
          </div>
          <h2 style={styles.successTitle}>E-mail envoyé !</h2>
          <p style={styles.successText}>
            Si un compte existe pour{" "}
            <strong style={{ color: "#1e1b4b" }}>{email}</strong>, vous recevrez
            un lien de réinitialisation sous peu.
            <br />
            Pensez à vérifier vos spams.
          </p>
          <AuthButton type="button" onClick={() => setSent(false)}>
            Renvoyer un e-mail
          </AuthButton>
        </div>
      </AuthShell>
    );
  }
 
  return (
    <AuthShell
      title="Mot de passe oublié"
      subtitle="Nous vous enverrons un lien de réinitialisation"
      sectionLabel="Réinitialisation"
      footer={
        <Link to="/auth/login" style={styles.link}>
          ← Retour à la connexion
        </Link>
      }
    >
      <form onSubmit={handleSubmit}>
        <AuthInput
          label="E-mail"
          name="email"
          type="email"
          placeholder="vous@exemple.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
          icon="fa-envelope"
        />
        <AuthButton type="submit" loading={loading}>
          Envoyer le lien
        </AuthButton>
      </form>
    </AuthShell>
  );
}
 
const styles = {
  successBox: {
    textAlign: "center",
    padding: "0.5rem 0.5rem 0",
  },
  successIcon: {
    width: "60px",
    height: "60px",
    background: "#eef2ff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 1.25rem",
  },
  successIconI: {
    fontSize: "24px",
    color: "#6366F1",
  },
  successTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#1e1b4b",
    marginBottom: "8px",
  },
  successText: {
    fontSize: "13px",
    color: "#6b7280",
    lineHeight: "1.7",
    marginBottom: "1.5rem",
  },
  link: {
    color: "#6366F1",
    fontWeight: "600",
    fontSize: "13px",
    textDecoration: "none",
  },
};