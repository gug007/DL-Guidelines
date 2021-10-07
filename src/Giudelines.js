import React, { useState } from "react";
import GuidelinesList from "./GuidelinesList";
import GuideForm from "./GuideForm";
import Container from "./Container";
import "./App.css";

const instructionsStepZero = "Step Zero: Lorem ipsum...";

export default function Guidelines() {
  const [newGuide, setNewGuide] = useState(null);

  return (
    <Container>
      <p>{instructionsStepZero}</p>
      <p className="cf pr-large">
        <a className="btn btn-default" onClick={() => setNewGuide({})}>
          <i className="fa fa-plus" aria-hidden="true" /> Create New Guideline
        </a>
      </p>
      {newGuide && <GuideForm onClose={() => setNewGuide(null)} />}
      <form action="submit">
        <div className="dl-guidelines-container flex flex-row">
          <GuidelinesList />
        </div>
      </form>
    </Container>
  );
}
