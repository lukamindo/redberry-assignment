import { useState, useEffect } from "react";
import ApplicationForm from "./ApplicationForm";

export default function Application() {
  const [applicationsData, setApplicationsData] = useState([]);
  const [skillsData, setSkillsData] = useState({});

  useEffect(() => {
    if (Object.keys(skillsData).length === 0) {
      fetch("https://bootcamp-2022.devtest.ge/api/skills").then((response) => {
        response.json().then((data) => {
          const obj = {};
          data.forEach((item) => {
            obj[item.id] = item.title;
          });
          setSkillsData(obj);
        });
      });
    }

    if (applicationsData.length > 0) {
      return;
    }

    fetch(
      "https://bootcamp-2022.devtest.ge/api/applications?token=b2f412a1-dcee-4a88-87cf-4bf16c843007"
    ).then((response) => {
      response.json().then((data) => {
        const mappedData = data.map((item) => {
          return {
            ...item,
            skills: item.skills.map((skill) => ({
              title: skillsData[skill.id],
              experience: skill.experience,
            })),
          };
        });
        setApplicationsData(mappedData);
      });
    });
  }, []);

  return (
    <>
      {applicationsData.map((application, index) => (
        <ApplicationForm
          key={application.phone}
          index={index + 1}
          application={application}
        />
      ))}
    </>
  );
}
