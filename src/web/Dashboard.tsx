import "./App.css";
import "./style.css";
// import { BiWindowOpen } from "react-icons/bi";
import { RiWindowFill } from "react-icons/ri";
import { GrObjectGroup } from "react-icons/gr";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Card
        title="MMD"
        children={<RiWindowFill />}
        onClick={() => console.log("a")}
      />
      <Card
        title="PmxEditor"
        children={<RiWindowFill />}
        onClick={() => console.log("a")}
      />
      <Card
        title="pmxモデル"
        children={<GrObjectGroup />}
        onClick={() => console.log("a")}
        href="/models"
      />
    </div>
  );
};

function Card({
  title,
  children,
  onClick,
  href,
}: {
  title: string;
  children: any;
  onClick: any;
  href?: string;
}) {
  return (
    <Link to={href}>
      <div className="card-wrapper" onClick={onClick}>
        <div className="card-icon">{children}</div>
        <p>{title}</p>
      </div>
    </Link>
  );
}
