import React from "react";
import { Link } from "react-router-dom";
 
export default function AuthShell({ title, subtitle, sectionLabel, children, footer }) {
  return (
    <div style={styles.pageBg}>
      <div style={styles.card}>
        {/* Logo */}
        <div style={styles.logoRow}>
          <Link to="/">
            <img
              alt="MedTrust Technologies"
              src={require("assets/img/logo.png").default}
              style={styles.logo}
            />
          </Link>
        </div>
 
        {/* Title */}
        <h1 style={styles.cardTitle}>{title}</h1>
        {subtitle && <p style={styles.cardSub}>{subtitle}</p>}
 
        {/* Section divider */}
        {sectionLabel && (
          <div style={styles.dividerRow}>
            <div style={styles.dividerLine} />
            <span style={styles.dividerLabel}>{sectionLabel}</span>
            <div style={styles.dividerLine} />
          </div>
        )}
 
        {/* Form content */}
        {children}
 
        {/* Footer */}
        {footer && <p style={styles.footerText}>{footer}</p>}
      </div>
    </div>
  );
}
 
const styles = {
  pageBg: {
    minHeight: "100vh",
    background: "#EEF2FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1rem",
    fontFamily: "inherit",
  },
  card: {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "2.5rem 2.25rem",
    width: "100%",
    maxWidth: "520px",
    border: "0.5px solid rgba(99,102,241,0.12)",
    boxShadow: "0 4px 32px rgba(99,102,241,0.08)",
  },
  logoRow: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1.75rem",
  },
  logo: {
    height: "52px",
    objectFit: "contain",
  },
  cardTitle: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#1e1b4b",
    textAlign: "center",
    margin: "0 0 4px 0",
  },
  cardSub: {
    fontSize: "14px",
    color: "#6b7280",
    textAlign: "center",
    margin: "0 0 1.75rem 0",
  },
  dividerRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "1.25rem",
  },
  dividerLine: {
    flex: 1,
    height: "0.5px",
    background: "#e0e7ff",
  },
  dividerLabel: {
    fontSize: "11px",
    fontWeight: "700",
    color: "#6366F1",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },
  footerText: {
    textAlign: "center",
    fontSize: "13px",
    color: "#6b7280",
    marginTop: "1.25rem",
    marginBottom: "0",
  },
};