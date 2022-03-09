import "./Langing.css";
import Heading from "../components/Heading";
import rocketman from "../images/rocketman.png";

import { Link } from "react-router-dom";

export default function Langing() {
  return (
    <div className="Langing">
      <Heading HeadingClass="LangingTitle">Welcome Rocketeer !</Heading>
      <Link to="/application" className="StartLink">
        Start Questionnaire
      </Link>
      <Link to="/applications" className="ApplicationsLink">
        Submitted Applications
      </Link>
      <img className="Rocketman" src={rocketman} alt="rocketman" />
    </div>
  );
}
