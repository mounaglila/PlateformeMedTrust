import React from "react";
 
export default function AuthButton({
  children,
  type = "button",
  loading = false,
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      disabled={loading}
      onClick={onClick}
      style={{
        ...styles.btn,
        ...(loading ? styles.btnDisabled : {}),
      }}
    >
      {loading ? (
        <span style={styles.loadingRow}>
          <i className="fas fa-circle-notch fa-spin" aria-hidden="true" />
          Chargement...
        </span>
      ) : (
        <span style={styles.contentRow}>
          {children}
          <i className="fas fa-arrow-right" style={{ fontSize: "14px" }} aria-hidden="true" />
        </span>
      )}
    </button>
  );
}
 
const styles = {
  btn: {
    width: "100%",
    padding: "13px 16px",
    background: "#4F46E5",
    color: "#ffffff",
    border: "none",
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "background 0.15s",
    marginTop: "4px",
  },
  btnDisabled: {
    opacity: 0.65,
    cursor: "not-allowed",
  },
  contentRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
  loadingRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
};