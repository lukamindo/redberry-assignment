import { useNavigate, useOutletContext } from "react-router-dom";
import "./Submit.css";
import { Link } from "react-router-dom";

export default function Submit() {
  const formData = useOutletContext();

  const navigate = useNavigate();

  const onClick = () =>
    fetch("https://bootcamp-2022.devtest.ge/api/application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData[0],
        token: "b2f412a1-dcee-4a88-87cf-4bf16c843007",
      }),
    }).finally(() => navigate("/thanks"));

  return (
    <div className="Submit">
      <button onClick={onClick} className="SubmitButton">
        Submit
      </button>
      <Link to="/application/devtalks" className="SubmitGoBackLink">
        go back
      </Link>
    </div>
  );
}
