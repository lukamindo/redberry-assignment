import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Page from "../components/Page";
import DarkPageContent from "../components/DarkPageContent";
import NavBar from "../components/NavBar";
import "./FormWrapper.css";

const pagesData = {
  application: {
    formTitle: "Hey, Rocketeer, what are your coordinates?",
    contentTitle: "Redberry Origins",
    content: `You watch “What? Where? When?” Yeah. Our founders used to play it.
    That’s where they got a question about a famous American author and
    screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
    exact name and he answered Ray Redberry. And at that moment, a name
    for a yet to be born company was inspired - Redberry 😇`,
  },
  skills: {
    formTitle: "Tell us about your skills",
    contentTitle: "A bit about our battles",
    content: `As we said, Redberry has been on the field for quite some time now,
    and we have touched and embraced a variety of programming languages,
    technologies, philosophies, and frameworks. We are battle-tested in
    PHP Laravel Stack with Vue.js, refined in React, and allies with
    Serverside technologies like Docker and Kubernetes, and now we have
    set foot in the web3 industry.`,
  },
  covid: {
    formTitle: "Covid Stuff",
    contentTitle: "Redberry Covid Policies",
    content: `As this infamous pandemic took over the world, we adjusted our working
    practices so that our employees can be as safe and comfortable as
    possible. We have a hybrid work environment, so you can either work
    from home or visit our lovely office on Sairme Street. If it was up to
    us, we would love you to see us in the office because we think
    face-to-face communications {'>'} Zoom meetings. Both on the fun and
    productivity scales.`,
  },
  devtalks: {
    formTitle: "What about you?",
    contentTitle: "Redberrian Insights",
    content: `We were soo much fun before the pandemic started! Parties almost every
    weekend and lavish employee birthday celebrations! Unfortunately,
    covid ruined that fun like it did almost everything else in the world.
    But we try our best to zhuzh it up a bit. For example, we host
    biweekly Devtalks where our senior and lead developers talk about
    topics they are passionate about. Previous topics have included Web3,
    NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but
    you can join our Zoom broadcast as well. Feel free to join either as
    an attendee or a speaker!`,
  },
  submit: {
    formTitle: "",
    contentTitle: "",
    content: "",
  },
};

export default function FormWrapper() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  useEffect(() => {
    const routes = ["", "/skills", "/covid", "/devtalks", "/submit"];
    navigate(`/application${routes[step - 1]}`);
  }, [step]);

  const [PersonalData, setPersonalData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const [SkillsData, setSkillsData] = useState([]);

  const [CovidData, setCovidData] = useState({
    work_preference: "",
    had_covid: null,
    had_covid_at: "",
    vaccinated: null,
    vaccinated_at: "",
  });

  const [DevTalkData, setDevTalkData] = useState({
    will_organize_devtalk: null,
    devtalk_topic: "",
    something_special: "",
  });

  const location = useLocation();
  function getPage() {
    const segments = location.pathname.split("/");
    return segments[segments.length - 1];
  }
  const page = getPage();
  const pageData = pagesData[page];

  function getContext() {
    switch (page) {
      case "application":
        return [PersonalData, setPersonalData];
      case "skills":
        return [SkillsData, setSkillsData];
      case "covid":
        return [CovidData, setCovidData];
      case "devtalks":
        return [DevTalkData, setDevTalkData];
      case "submit":
        return [
          {
            ...PersonalData,
            skills: SkillsData.map((item) => ({
              id: item.id,
              experience: item.experience,
            })),
            ...CovidData,
            ...DevTalkData,
          },
        ];
      default:
        return [];
    }
  }

  if (page === "submit") {
    return <Outlet context={getContext()} />;
  }

  return (
    <div className="FormWrapper">
      <Page
        HeadingClass="FormWrapperLightHeading"
        title={pageData.formTitle}
        theme="light"
      >
        <Outlet context={getContext()} />
        <NavBar NumberOfButtons="4" Index={step} onChange={setStep} />
      </Page>

      <Page
        HeadingClass="FormWrapperDarkHeading"
        title={pageData.contentTitle}
        theme="dark"
      >
        <DarkPageContent>{pageData.content}</DarkPageContent>
      </Page>
    </div>
  );
}
