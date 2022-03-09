import { useState, useEffect } from "react";
import Select from "react-select";
import "./SkillsSelect.css";

export default function SkillsSelect(props) {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    if (skillsData.length > 0) {
      return;
    }

    fetch("https://bootcamp-2022.devtest.ge/api/skills").then((response) => {
      response
        .json()
        .then((data) =>
          setSkillsData(
            data.map((item) => ({ value: item.id, label: item.title }))
          )
        );
    });
  });

  return (
    <Select
      value={props.value}
      onChange={(e) => props.onChange(e)}
      classNamePrefix="SkillsSelect"
      options={skillsData}
      isOptionDisabled={(option) => props.selectedSkills.includes(option.value)}
    />
  );
}
