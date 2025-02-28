import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";

const FullLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 768;
      setIsMobile(mobileView);
      setSidebarOpen(!mobileView); // Open sidebar on larger screens, close on mobile
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main style={styles.main}>
      {/* Header with Sidebar Toggle */}
      <Header isMobile={isMobile} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

      <div style={styles.layout}>
        {/* Sidebar - Hidden on mobile unless toggled */}
        <Sidebar isSidebarOpen={isSidebarOpen} />

        {/* Main Content */}
        <div
          style={{
            ...styles.content,
            marginLeft: isSidebarOpen && !isMobile ? "260px" : "0", // Push content when sidebar is open on large screens
          }}
        >
          <Container fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  layout: {
    display: "flex",
    flex: 1,
  },
  content: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#f8f9fa",
    transition: "margin-left 0.3s ease-in-out",
  },
};

export default FullLayout;
