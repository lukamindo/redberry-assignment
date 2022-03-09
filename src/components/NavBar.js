import PreviousButton from "../images/Previous.svg";
import "./NavBar.css";

export default function NavBar(props) {
  const navItems = [];

  for (var i = 1; i <= props.NumberOfButtons; i++) {
    const navIndex = navItems.length + 1;
    navItems.push(
      <li key={i}>
        <button onClick={() => props.onChange(navIndex)}>
          <span
            className={`Circle ${props.Index >= i ? "RedCircle" : ""}`}
          ></span>
        </button>
      </li>
    );
  }

  return (
    <ul className="NavBarMain">
      <li>
        <button onClick={() => props.onChange(props.Index - 1)}>
          <img
            className="NavBarArrow NavBarButtonLeft"
            src={PreviousButton}
          ></img>
        </button>
      </li>

      {navItems}

      <li>
        <button onClick={() => props.onChange(props.Index + 1)}>
          <img
            className="NavBarArrow NavBarButtonRight"
            src={PreviousButton}
          ></img>
        </button>
      </li>
    </ul>
  );
}
