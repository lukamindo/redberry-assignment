import "./Thanks.css";
import Heading from "../components/Heading";
import { useNavigate } from "react-router-dom";

export default function Thanks() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 3000);

  return (
    <div className="Thanks">
      <Heading HeadingClass="ThanksHeading">Thanks for Joining 😊</Heading>
    </div>
  );
}
