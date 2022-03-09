import { useOutletContext } from "react-router-dom";
import FormInput from "./FormInput";
import "./PersonalInformation.css";

export default function FormOne() {
  const [personalFormData, setPersonalFormData] = useOutletContext();

  return (
    <form className="FormOne">
      <FormInput
        value={personalFormData.first_name}
        onInput={(e) =>
          setPersonalFormData({ ...personalFormData, first_name: e })
        }
        validationRules={{
          className: "FirstName",
          required: true,
          type: "text",
          placeholder: "First Name",
          minLength: 2,
        }}
      />
      <FormInput
        value={personalFormData.last_name}
        onInput={(e) =>
          setPersonalFormData({ ...personalFormData, last_name: e })
        }
        validationRules={{
          className: "LastName",
          required: true,
          type: "text",
          placeholder: "Last Name",
          minLength: 2,
        }}
      />
      <FormInput
        value={personalFormData.email}
        onInput={(e) => setPersonalFormData({ ...personalFormData, email: e })}
        validationRules={{
          className: "Email",
          required: true,
          type: "email",
          placeholder: "E Mail",
        }}
      />
      <FormInput
        value={personalFormData.phone}
        onInput={(e) => setPersonalFormData({ ...personalFormData, phone: e })}
        validationRules={{
          className: "Phone",
          required: false,
          type: "tel",
          placeholder: "+995 5__ __ __ __",
          pattern: "+995[0-9]{9}",
        }}
      />
    </form>
  );
}
