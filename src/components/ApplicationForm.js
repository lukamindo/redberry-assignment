import { useState } from "react";
import FormInput from "./FormInput";
import RadioInput from "./RadioInput";
import "./ApplicationForm.css";

export default function ApplicationForm(props) {
  const data = props.application;
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <div className="Main">
      <div className="head">
        {props.index}
        <button
          className={`applicationsbutton${open ? " rotate" : ""}`}
          onClick={toggleOpen}
        >
          &#x025BE;
        </button>
      </div>

      <div className={`body${open ? " open" : ""}`}>
        <div className="applicationsSides">
          <div className="PersnoalInformation">
            <h4 className="ApplicationsRedHeading">Personal Information</h4>

            <div className="">
              <span>First Name</span> <span>{data.first_name}</span>
            </div>

            <div>
              <span>Last Name</span> <span>{data.last_name}</span>
            </div>

            <div>
              <span>E mail</span> <span>{data.email}</span>
            </div>

            <div>
              <span>Phone</span> <span>{data.phone}</span>
            </div>
          </div>

          <div className="CovidSituation">
            <h4 className="ApplicationsRedHeading">Covid Situation</h4>

            <div className="howwouldyoupreferwork">
              <h4>how would you prefer to work?</h4>

              <div>
                <RadioInput
                  readOnly
                  checked={data.work_preference === "from_office"}
                />{" "}
                From Sairme office
              </div>
              <div>
                <RadioInput
                  readOnly
                  checked={data.work_preference === "from_home"}
                />{" "}
                From Home
              </div>
              <div>
                <RadioInput
                  readOnly
                  checked={data.work_preference === "hybrid"}
                />{" "}
                Hybrid
              </div>
            </div>

            <div className="didyouhadcovid">
              <h4>Did you have covid 19?</h4>
              <div>
                <RadioInput readOnly checked={data.had_covid} /> Yes
              </div>

              <div>
                <RadioInput readOnly checked={!data.had_covid} /> No
              </div>
            </div>

            <div className="whendidyouhavecovid">
              <h4>When did you have covid 19?</h4>
              <FormInput
                value={data.had_covid_at}
                validationRules={{ disabled: true }}
              />
            </div>

            <div className="haveyoubeenvaccinated">
              <h4>Have you been vaccinated?</h4>
              <div>
                <RadioInput readOnly checked={data.vaccinated} /> Yes
              </div>
            </div>
            <div>
              <RadioInput readOnly checked={!data.vaccinated} /> No
            </div>
          </div>

          <div className="whendidyougetvaccine">
            <h4 className="ApplicationsHeading4">
              When did you get covid vaccine?
            </h4>
            <FormInput
              value={data.vaccinated_at}
              validationRules={{ disabled: true }}
            />
          </div>
        </div>
        <div className="applicationsSides">
          <div className="skillset">
            <h4 className="ApplicationsRedHeading">Skillset</h4>
            <ul className="SkillsUl">
              {data.skills.map((skill) => (
                <li key={skill.title} className="skillsLi">
                  {skill.title} <span className="SpanForSpaces" /> Years of
                  Experience: {skill.experience}
                </li>
              ))}
            </ul>
          </div>

          <div className="insights">
            <h4 className="ApplicationsRedHeading">Insigts</h4>
            <div className="devtalktruefalse">
              <h4>
                Would you attend Devtalks and maybe also organize your own?
              </h4>
              <div>
                <RadioInput readOnly checked={data.will_organize_devtalk} /> Yes
              </div>

              <div>
                <RadioInput readOnly checked={!data.will_organize_devtalk} /> No
              </div>
            </div>

            <div className="devtalkabout">
              <h4>What would you speak about at Devtalk?</h4>
              <FormInput
                value={data.devtalk_topic}
                validationRules={{ disabled: true }}
              />
            </div>

            <div className="smthspecial">
              <h4>Tell us somthing special</h4>
              <FormInput
                value={data.something_special}
                validationRules={{ disabled: true }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
