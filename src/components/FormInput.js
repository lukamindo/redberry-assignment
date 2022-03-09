import "./FormInput.css";

export default function FormInput(props) {
  return (
    <input
      {...props.validationRules}
      value={props.value}
      onInput={(e) => props.onInput(e.target.value)}
      className={`FormInput ${
        props.validationRules?.type !== "radio" ? "FormInputBox" : ""
      } ${props.InputClass}`}
    />
  );
}
