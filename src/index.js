import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormWrapper from "./pages/FormWrapper";
import Langing from "./pages/Langing";
import SkillsForm from "./components/SkillsForm";
import CovidForm from "./components/CovidForm";
import InsightForm from "./components/InsightForm";
import Submit from "./pages/Submit";
import Thanks from "./pages/Thanks";
import PersonalInformation from "./components/PersonalInformation";
import Application from "./components/Applications";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" index element={<Langing />} />
      <Route path="/application" element={<FormWrapper />}>
        <Route index element={<PersonalInformation />} />
        <Route path="skills" element={<SkillsForm />} />
        <Route path="covid" element={<CovidForm />} />
        <Route path="devtalks" element={<InsightForm />} />
        <Route path="submit" element={<Submit />} />
      </Route>
      <Route path="thanks" element={<Thanks />} />
      <Route path="applications" element={<Application />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
