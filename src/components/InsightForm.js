import { useOutletContext } from "react-router-dom";
import FormInput from "./FormInput";
import "./InsightsForm.css";
import RadioInput from "./RadioInput";

export default function InsightsForm() {
  const [insightFormData, setInsightFormData] = useOutletContext();

  return (
    <div className="InsightsForm">
      <form>
        <label>
          <p>Would you attend Devtalks and maybe also organize your own?</p>
          <RadioInput
            name="will_organize_devtalk	"
            value={true}
            checked={insightFormData.will_organize_devtalk === true}
            onChange={(e) =>
              setInsightFormData({
                ...insightFormData,
                will_organize_devtalk: e,
              })
            }
          />
          Yes
        </label>

        <label>
          <RadioInput
            name="will_organize_devtalk	"
            value={false}
            checked={insightFormData.will_organize_devtalk === false}
            onChange={(e) =>
              setInsightFormData({
                ...insightFormData,
                will_organize_devtalk: e,
              })
            }
          />
          No
        </label>

        {insightFormData.will_organize_devtalk && (
          <label>
            What would you speak about at Devtalk?
            <FormInput
              InputClass="DevTalkTopicBox"
              value={insightFormData.devtalk_topic}
              onInput={(e) =>
                setInsightFormData({ ...insightFormData, devtalk_topic: e })
              }
              validationRules={{
                type: "text",
                placeholder: "I would...",
                required: true,
              }}
            />
          </label>
        )}

        <label>
          Tell us something special
          <FormInput
            InputClass="SomeThingSpecialBox"
            value={insightFormData.something_special}
            onInput={(e) =>
              setInsightFormData({ ...insightFormData, something_special: e })
            }
            validationRules={{
              type: "text",
              placeholder: "I...",
              required: true,
            }}
          />
        </label>
      </form>
    </div>
  );
}
