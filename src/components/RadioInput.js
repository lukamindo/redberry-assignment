export default function RadioInput(props) {
  return (
    <input
      type="radio"
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={(e) => props.onChange(props.value)}
    />
  );
}
