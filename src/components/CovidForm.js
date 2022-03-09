import { useOutletContext } from "react-router-dom";
import FormInput from "./FormInput";
import RadioInput from "./RadioInput";
//import "./CovidForm.css"

export default function CovidForm() {
  const [covidFormData, setCovidFormData] = useOutletContext();

  return (
    <div className="CovidForm">
      <form>
        <label>
          <p>how would you prefer to work?</p>
          <RadioInput
            name="work_preference"
            value="from_office"
            checked={covidFormData.work_preference === "from_office"}
            onChange={(e) =>
              setCovidFormData({ ...covidFormData, work_preference: e })
            }
          />
          From Sairme Office
        </label>

        <label>
          <RadioInput
            name="work_preference"
            value="from_home"
            checked={covidFormData.work_preference === "from_home"}
            onChange={(e) =>
              setCovidFormData({ ...covidFormData, work_preference: e })
            }
          />
          From Home
        </label>

        <label>
          <RadioInput
            name="work_preference"
            value="hybrid"
            checked={covidFormData.work_preference === "hybrid"}
            onChange={(e) =>
              setCovidFormData({ ...covidFormData, work_preference: e })
            }
          />
          Hybrid
        </label>

        <label>
          <p>Did you contact covid 19? :(</p>
          <RadioInput
            name="had_covid"
            value={true}
            checked={covidFormData.had_covid === true}
            onChange={(e) =>
              setCovidFormData({ ...covidFormData, had_covid: e })
            }
          />
          Yes
        </label>

        <label>
          <RadioInput
            name="had_covid"
            value={false}
            checked={covidFormData.had_covid === false}
            onChange={(e) =>
              setCovidFormData({ ...covidFormData, had_covid: e })
            }
          />
          No
        </label>

        {covidFormData.had_covid && (
          <label>
            When?
            <FormInput
              value={covidFormData.had_covid_at}
              onInput={(e) =>
                setCovidFormData({ ...covidFormData, had_covid_at: e })
              }
              validationRules={{
                required: true,
                type: "date",
              }}
            />
          </label>
        )}

        <label>
          <p>Have you been vaccinated?</p>
          <RadioInput
            name="vaccinated"
            value={true}
            checked={covidFormData.vaccinated === true}
            onChange={(e) =>
              setCovidFormData({ ...covidFormData, vaccinated: e })
            }
          />
          Yes
        </label>

        <label>
          <RadioInput
            name="vaccinated"
            value={false}
            checked={covidFormData.vaccinated === false}
            onChange={(e) =>
              setCovidFormData({ ...covidFormData, vaccinated: e })
            }
          />
          No
        </label>

        {covidFormData.vaccinated && (
          <label>
            When did you get your last covid vaccine?
            <FormInput
              value={covidFormData.vaccinated_at}
              onInput={(e) =>
                setCovidFormData({ ...covidFormData, vaccinated_at: e })
              }
              validationRules={{
                required: true,
                type: "date",
              }}
            />
          </label>
        )}
      </form>
    </div>
  );
}
