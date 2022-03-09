import PropTypes from "prop-types";
import "./Page.css";
import Heading from "./Heading";

export default function Page(props) {
  return (
    <div
      className={`Page ${props.theme === "light" ? "Page-light" : "Page-dark"}`}
    >
      <Heading HeadingClass={props.HeadingClass}>{props.title}</Heading>

      {props.children}
    </div>
  );
}

Page.propTypes = {
  title: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark"]),
};

Page.defaultProps = {
  theme: "dark",
};
