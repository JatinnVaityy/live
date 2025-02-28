import React from "react";

const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <h1 style={styles.text}>Livewell</h1>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f8ff",
  },
  text: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "skyblue",
    animation: "fadeIn 1.5s infinite alternate",
  },
  "@keyframes fadeIn": {
    "0%": { opacity: 0.3 },
    "100%": { opacity: 1 },
  },
};

export default Loader;
