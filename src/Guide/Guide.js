import React, { useCallback, useState } from "react";
import Container from "../Container";
import GuideItem from "./GuideItem";
import SectionForm from "./SectionForm";

const instructionsStepOne =
  "Step One: Let's start by selecting the sections you would like to use.";

const initAvailableSections = [
  {
    id: 0,
    list: 0,
    title: "Header",
    fieldName: "header",
    fieldType: "text",
    defaultText: "<h1>Header</h1>",
  },
  {
    id: 1,
    list: 1,
    title: "Introduction",
    fieldName: "introduction",
    fieldType: "text",
    defaultText:
      '<p>PLEASE READ THESE TERMS OF SERVICE (THESE “TERMS”) CAREFULLY. THESE TERMS ARE A BINDING CONTRACT FOR THE USE OF Genericom, INC. (Genericom) SERVICES.</p><p>BY ACCESSING OR USING Genericom SERVICES YOU ARE ACCEPTING THESE TERMS (ON BEHALF OF YOURSELF OR THE ENTITY THAT YOU REPRESENT) AND YOU REPRESENT AND WARRANT THAT YOU HAVE THE RIGHT, AUTHORITY, AND CAPACITY TO ENTER INTO THESE TERMS (ON BEHALF OF YOURSELF OR THE ENTITY THAT YOU REPRESENT AND ITS AFFILIATES). IF YOU DO NOT AGREE TO BE BOUND BY ALL OF THE PROVISIONS OF THESE TERMS, DO NOT ACCESS OR USE Genericom’S SERVICES.</p><p>PRICING FOR Genericom’S SERVICES IS AVAILABLE AT <a href="https://www.Genericom.com/pricing">https://www.Genericom.com/pricing</a>. DOCUMENTATION OF Genericom’S SERVICES IS AVAILABLE AT <a href="https://docs.Genericom.com">https://docs.Genericom.com</a>. Genericom’S ACCEPTABLE USE POLICY IS AVAILABLE AT <a href="https://www.Genericom.com/acceptable-use">https://www.Genericom.com/acceptable-use</a>. BEFORE ACCEPTING THESE TERMS AND USING Genericom’S SERVICES, PLEASE REVIEW THE INFORMATION AT EACH OF THESE ONLINE LOCATIONS.</p><p>THESE TERMS WERE LAST UPDATED ON March 08, 2021. PRIOR VERSIONS OF Genericom’S TERMS OF SERVICE ARE AVAILABLE AT <a href="https://docs.Genericom.com">https://docs.Genericom.com</a>.</p>',
  },
  {
    id: 2,
    list: 2,
    title: "Services",
    fieldName: "services",
    fieldType: "text",
    defaultText:
      "<p><strong>Services.</strong> Genericom will make the Services available to Subscriber according to one or more online or written ordering documents which incorporate the Agreement (each a <strong>“Service Order”</strong>).</p>",
  },
  {
    id: 3,
    list: 3,
    title: "Compliance",
    fieldName: "compliance",
    fieldType: "text",
    defaultText:
      "<p><strong>3.2   Compliance with Laws.</strong> Lorem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>",
  },
  {
    id: 4,
    list: 4,
    title: "Expectations",
    fieldName: "expectations",
    fieldType: "text",
    defaultText:
      "Sunt omnis blanditiis aut vitae a sed amet voluptas sit rerum similique recusandae explicabo. Voluptatibus et qui qui et quis ut commodi in corrupti qui dolorem consequatur rerum similique voluptatum. Unde aspernatur nulla earum excepturi ut eius dolor ad reprehenderit. Modi molestias et aperiam qui voluptas voluptas incidunt. Quam aliquam animi quia.",
  },
  {
    id: 5,
    list: 5,
    title: "Standards",
    fieldName: "standards",
    fieldType: "text",
    defaultText:
      "Sunt omnis blanditiis aut vitae a sed amet voluptas sit rerum similique recusandae explicabo. Voluptatibus et qui qui et quis ut commodi in corrupti qui dolorem consequatur rerum similique voluptatum. Unde aspernatur nulla earum excepturi ut eius dolor ad reprehenderit. Modi molestias et aperiam qui voluptas voluptas incidunt. Quam aliquam animi quia.",
  },
  {
    id: 6,
    list: 6,
    title: "Diversity",
    fieldName: "diversity",
    fieldType: "text",
    defaultText:
      "Sunt omnis blanditiis aut vitae a sed amet voluptas sit rerum similique recusandae explicabo. Voluptatibus et qui qui et quis ut commodi in corrupti qui dolorem consequatur rerum similique voluptatum. Unde aspernatur nulla earum excepturi ut eius dolor ad reprehenderit. Modi molestias et aperiam qui voluptas voluptas incidunt. Quam aliquam animi quia.",
  },
];

export default function Guide({ addToGuidelines }) {
  const [availableSections, setAvailableSections] = useState(
    initAvailableSections
  );
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleSectionForm = () => setOpen((v) => !v);

  const toggleItem = useCallback(
    (v) => {
      setSelected((prev) =>
        prev.includes(v.id) ? prev.filter((g) => g !== v.id) : prev.concat(v.id)
      );
    },
    [setSelected]
  );

  const handleSaveSection = useCallback(
    (values) => {
      setAvailableSections((prev) =>
        prev.concat({
          id: availableSections.length,
          list: availableSections.length,
          title: values.name,
          fieldName: "compliance",
          fieldType: "text",
          defaultText: values.data,
        })
      );
    },
    [availableSections, setAvailableSections]
  );

  const deleteAll = () => {
    setSelected([]);
  };

  const selectAll = () => {
    setSelected(availableSections.map((v) => v.id));
  };

  return (
    <Container>
      <p>{instructionsStepOne}</p>
      <p className="cf pr-large">
        {selected.length ? (
          <a className="btn btn-default" onClick={deleteAll}>
            <i className="fa fa-check" aria-hidden="true" /> Deselect All
          </a>
        ) : (
          <a className="btn btn-default" onClick={selectAll}>
            <i className="fa fa-check" aria-hidden="true" /> Select All
          </a>
        )}
        <a className="btn btn-primary right" onClick={addToGuidelines}>
          <i className="fa fa-plus" aria-hidden="true" /> Add to your Guidelines
        </a>
      </p>
      <p className="cf pr-large">
        <a className="btn btn-orange" onClick={toggleSectionForm}>
          <i className="fa fa-plus" aria-hidden="true" /> Create New Section
        </a>
      </p>
      {open && (
        <SectionForm onClose={toggleSectionForm} onSave={handleSaveSection} />
      )}
      <form action="submit">
        <div className="dl-guidelines-container flex flex-row">
          <div
            id="guideElements"
            className="dl-guidelines guide-elements pr-large flex flex-column"
          >
            {availableSections.map((v, i) => (
              <GuideItem
                key={i}
                item={v}
                selected={selected}
                toggleItem={toggleItem}
              />
            ))}
          </div>
        </div>
      </form>
    </Container>
  );
}
