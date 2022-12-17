import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import "./style.css";

export const Loading = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    document.getElementById("loadwindow")!.classList.add("fade-effect");
    setTimeout(() => {
      navigate("/dashboard");
    }, 250);
  }, 1000);
  return (
    <>
      <div className="container" id="loadwindow">
        <img src="../assets/icon_rinlen.png" className="loading-icon" />
        <h1 className="loading-title">MMDLauncher</h1>
        <div className="loading-spinner" />
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </>
  );
};
