import React, { useState } from "react";
import Container from "./Container";

const instructionsStepOne =
  "Step One: Let's start by selecting the sections you would like to use.";

const availableSections = [
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
  const [newGuide, setNewGuide] = useState(null);
  const [selected, setSelected] = useState([]);

  const isSelected = (v) => selected.includes(v.id);

  const toggleSection = (v) => {
    setSelected((prev) =>
      prev.includes(v.id) ? prev.filter((g) => g !== v.id) : prev.concat(v.id)
    );
  };

  const deleteAll = () => {
    setSelected([]);
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
          <a className="btn btn-default">
            <i className="fa fa-check" aria-hidden="true" /> Select All
          </a>
        )}
        <a className="btn btn-primary right" onClick={addToGuidelines}>
          <i className="fa fa-plus" aria-hidden="true" /> Add to your Guidelines
        </a>
      </p>

      <p className="cf pr-large">
        <a className="btn btn-orange">
          <i className="fa fa-plus" aria-hidden="true" /> Create New Section
        </a>
      </p>

      <form action="submit">
        <div className="dl-guidelines-container flex flex-row">
          <div
            id="guideElements"
            className="dl-guidelines guide-elements pr-large flex flex-column"
          >
            {availableSections.map((v, i) => (
              <>
                <div
                  key={i}
                  className={`${"__active"} item-section flex flex-column pa-small mb-medium`}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                    className="item-header flex flex-row flex-vert-center mb-medium pa-medium"
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <svg
                        className="move mr-medium hidden"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="5 9 2 12 5 15"></polyline>
                        <polyline points="9 5 12 2 15 5"></polyline>
                        <polyline points="15 19 12 22 9 19"></polyline>
                        <polyline points="19 9 22 12 19 15"></polyline>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <line x1="12" y1="2" x2="12" y2="22"></line>
                      </svg>
                      <div
                        className="action-select mr-small"
                        onClick={() => toggleSection(v)}
                      >
                        {isSelected(v) ? (
                          <a
                            className={isSelected(v) ? "active" : ""}
                            title="Selet"
                            role="button"
                            tabIndex="0"
                          >
                            <i className="fa fa-check-square" />
                            <span>selected</span>
                          </a>
                        ) : (
                          <a title="Selet" role="button" tabIndex="0">
                            <i className="fa fa-square" />
                            <span>select</span>
                          </a>
                        )}
                      </div>
                      <h4 className="ml-large mb-0">{v.title}</h4>
                    </div>
                    <div className="section-actions flex flex-row">
                      <div className="action-preview mr-small">
                        <a
                          className="btn btn-default btn-info"
                          title="Preview"
                          role="button"
                          tabIndex="0"
                        >
                          <i className="fa fa-eye" aria-hidden="true" />
                          <span>preview</span>
                        </a>
                      </div>
                      <div className="action-edit mr-small hidden">
                        <a
                          className="btn btn-primary edit-contact-modal-btn"
                          title="Edit"
                          role="button"
                          tabIndex="0"
                        >
                          <i className="fa fa-pencil" aria-hidden="true" />
                          <span>edit</span>
                        </a>
                      </div>
                      <div className="action-edit mr-small">
                        <a
                          className="btn btn-clone"
                          title="Edit"
                          role="button"
                          tabIndex="0"
                        >
                          <i className="fa fa-clone" aria-hidden="true" />
                          <span>clone</span>
                        </a>
                      </div>
                      <div className="action-remove mr-small hidden">
                        <a
                          className="btn btn-default"
                          title="Delete"
                          role="button"
                          tabIndex="0"
                        >
                          <i className="fa fa-trash" aria-hidden="true" />
                          <span>delete</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {isSelected(v) && (
                    <div
                      className="item-content pa-medium"
                      dangerouslySetInnerHTML={{ __html: v.defaultText }}
                    />
                  )}
                </div>
              </>
            ))}
          </div>
        </div>
      </form>
    </Container>
  );
}
