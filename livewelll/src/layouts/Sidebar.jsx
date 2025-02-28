import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdMedication, MdMyLocation, MdDashboard } from "react-icons/md";
import { FaUser, FaStethoscope } from "react-icons/fa";

const navigation = [
  { title: "Dashboard", href: "/dashboard", icon: <MdDashboard /> },
  { title: "Pill Reminder", href: "/smartpill", icon: <MdMedication /> },
  { title: "GPS Location", href: "/gps-location", icon: <MdMyLocation /> },
  { title: "Symptom Checker", href: "/symptom", icon: <FaStethoscope /> },
  { title: "Profile", href: "/profile", icon: <FaUser /> },
];

const Sidebar = ({ isSidebarOpen }) => {
  const location = useLocation();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const checkScreenSize = () => setIsSmallScreen(window.innerWidth <= 768);
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isSmallScreen) return null;

  return (
    <div
      style={{
        width: isSidebarOpen ? "250px" : "0",
        height: "calc(100vh - 60px)", // Adjust height to fit under header
        backgroundColor: "#fff",
        padding: isSidebarOpen ? "20px" : "0",
        position: "fixed",
        top: "60px", 
        left: 0,
        borderRight: "1px solid #ddd",
        boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.1)",
        transition: "width 0.3s ease",
        overflow: "hidden",
      }}
    >
      <nav>
        {navigation.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            aria-label={item.title}
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: location.pathname === item.href ? "#1890ff" : "#333",
              backgroundColor: location.pathname === item.href ? "#f0f0f0" : "transparent",
              padding: "12px",
              borderRadius: "5px",
              marginBottom: "8px",
              fontSize: "16px",
              fontWeight: "500",
              transition: "0.3s",
              cursor: "pointer",
              gap: "10px",
            }}
          >
            <span style={{ fontSize: "20px" }}>{item.icon}</span>
            {isSidebarOpen && item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
