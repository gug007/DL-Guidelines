import React, { useCallback, useState } from "react";
import GuidelinesList from "./GuidelinesList";
import GuideForm from "./GuideForm";
import Container from "./Container";

const instructionsStepZero = "Step Zero: Lorem ipsum...";

const initGuidelines = [
  {
    id: 0,
    title: "Foo Guidelines",
    createdDate: "August 10, 2021",
    modifiedDate: "August 24, 2021",
    createdBy: "Evan Krow",
    modifiedBy: "Catherine Krow",
  },
  {
    id: 1,
    title: "Bar Guidelines",
    createdDate: "July 10, 2021",
    modifiedDate: "September 4, 2021",
    createdBy: "Kooba Boo",
    modifiedBy: "Miley Krow",
  },
];

export default function Guidelines() {
  const [newGuide, setNewGuide] = useState(null);
  const [guidelines, setGuidelines] = useState(initGuidelines);

  const handleSaveGuide = useCallback(
    (title) => {
      setGuidelines((prev) => [
        ...prev,
        {
          id: guidelines.length,
          title,
          createdDate: "July 10, 2021",
          modifiedDate: "September 4, 2021",
          createdBy: "Kooba Boo",
          modifiedBy: "Miley Krow",
        },
      ]);
    },
    [guidelines, setGuidelines]
  );

  return (
    <Container>
      <p>{instructionsStepZero}</p>
      <p className="cf pr-large">
        <a className="btn btn-default" onClick={() => setNewGuide({})}>
          <i className="fa fa-plus" aria-hidden="true" /> Create New Guideline
        </a>
      </p>
      {newGuide && (
        <GuideForm onSave={handleSaveGuide} onClose={() => setNewGuide(null)} />
      )}
      <form action="submit">
        <div className="dl-guidelines-container flex flex-row">
          <GuidelinesList list={guidelines} />
        </div>
      </form>
    </Container>
  );
}
