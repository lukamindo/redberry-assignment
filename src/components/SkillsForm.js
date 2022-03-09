import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import SkillsSelect from "./SkillsSelect";
import "./SkillsForm.css";

export default function SkillsForm(props) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const [experience, setExperience] = useState("");

  const [skills, setSkills] = useOutletContext();

  function onClickAdd() {
    console.log([
      ...skills,
      {
        id: selectedSkill.value,
        label: selectedSkill.label,
        experience: experience,
      },
    ]);
    setSkills([
      ...skills,
      {
        id: selectedSkill.value,
        label: selectedSkill.label,
        experience: experience,
      },
    ]);
    setSelectedSkill(null);
    setExperience("");
  }

  function removeSkill(id) {
    setSkills(skills.filter((skill) => skill.id !== id));
  }

  return (
    <form>
      <SkillsSelect
        value={selectedSkill}
        onChange={(e) => setSelectedSkill(e)}
        selectedSkills={skills.map((skill) => skill.id)}
      />
      <input
        value={experience}
        onInput={(e) => setExperience(e.target.value)}
        className="SkillsExperience"
        required={true}
        type="number"
        placeholder="Experience Duration in Years"
        min={0}
      />
      <button type="button" onClick={onClickAdd}>
        Add Programming Language
      </button>

      <ul className="SkillsUl">
        {skills.map((skill) => (
          <li key={skill.id} className="skillsLi">
            {skill.label} <span className="SpanForSpaces" /> Years of
            Experience: {skill.experience}
            <button
              className="RemoveButton"
              type="button"
              onClick={() => removeSkill(skill.id)}
            >
              &otimes;
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
}
