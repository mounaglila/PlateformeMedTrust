import React from "react";
import { Link } from "react-router-dom";
import AuthShell from "components/auth/AuthShell.js";
import AuthInput from "components/auth/AuthInput.js";
import AuthButton from "components/auth/AuthButton.js";
 
export default function Register() {
  const [form, setForm] = React.useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = React.useState(false);
 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
  };
 
  /* Password strength: 0–4 */
  const getStrength = (pw) => {
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
  };
 
  const strength = getStrength(form.password);
  const strengthColors = ["#e0e7ff", "#ef4444", "#f59e0b", "#6366F1", "#22c55e"];
  const strengthLabels = ["", "Faible", "Moyen", "Fort", "Excellent"];
 
  return (
    <AuthShell
      title="Créer un compte"
      subtitle="Rejoignez l'espace MedTrust"
      sectionLabel="Informations personnelles"
      footer={
        <>
          Déjà inscrit ?{" "}
          <Link to="/auth/login" style={styles.link}>
            Se connecter
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit}>
        {/* Nom + Prénom grid */}
        <div style={styles.grid2}>
          <AuthInput
            label="Nom"
            name="nom"
            type="text"
            placeholder="Nom"
            value={form.nom}
            onChange={handleChange}
            autoComplete="family-name"
            required
            icon="fa-user"
          />
          <AuthInput
            label="Prénom"
            name="prenom"
            type="text"
            placeholder="Prénom"
            value={form.prenom}
            onChange={handleChange}
            autoComplete="given-name"
            required
            icon="fa-user"
          />
        </div>
 
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
          placeholder="Minimum 8 caractères"
          value={form.password}
          onChange={handleChange}
          autoComplete="new-password"
          required
          icon="fa-lock"
        />
 
        {/* Strength bar */}
        {form.password.length > 0 && (
          <div style={styles.strengthWrap}>
            <div style={styles.strengthBar}>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    ...styles.strengthSeg,
                    background: i <= strength ? strengthColors[strength] : "#e0e7ff",
                  }}
                />
              ))}
            </div>
            <span style={{ ...styles.strengthLabel, color: strengthColors[strength] }}>
              {strengthLabels[strength]}
            </span>
          </div>
        )}
 
        <AuthInput
          label="Confirmer le mot de passe"
          name="confirmPassword"
          type="password"
          placeholder="Répétez le mot de passe"
          value={form.confirmPassword}
          onChange={handleChange}
          autoComplete="new-password"
          required
          icon="fa-lock"
        />
 
        <AuthButton type="submit" loading={loading}>
          Créer mon compte
        </AuthButton>
      </form>
    </AuthShell>
  );
}
 
const styles = {
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
  },
  strengthWrap: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "-8px",
    marginBottom: "1rem",
  },
  strengthBar: {
    display: "flex",
    gap: "4px",
    flex: 1,
  },
  strengthSeg: {
    height: "3px",
    flex: 1,
    borderRadius: "2px",
    transition: "background 0.2s",
  },
  strengthLabel: {
    fontSize: "11px",
    fontWeight: "600",
    minWidth: "52px",
    textAlign: "right",
  },
  checkRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    fontSize: "13px",
    color: "#6b7280",
    cursor: "pointer",
    marginBottom: "1.25rem",
    lineHeight: "1.5",
  },
  checkbox: {
    width: "14px",
    height: "14px",
    marginTop: "2px",
    accentColor: "#6366F1",
    flexShrink: 0,
    cursor: "pointer",
  },
  link: {
    color: "#6366F1",
    fontWeight: "600",
    fontSize: "13px",
    textDecoration: "none",
  },
};