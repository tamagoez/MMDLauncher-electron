import { Link } from "react-router-dom";
import "./components.css";
export const TopBar = () => {
  
  return (
    <div className="wrapper">
      <img src="../assets/icon_rinlen.png" />
      <p>MMDLauncher</p>
      <p>
        <Link to="/">l</Link>
      </p>
    </div>
  );
};
