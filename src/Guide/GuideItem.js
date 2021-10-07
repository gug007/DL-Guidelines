import React, { useState } from "react";

export default function GuideItem({ item, selected, toggleItem }) {
  const [open, setOpen] = useState(false);

  const isSelected = (v) => selected.includes(v.id);

  const toggleSection = () => {
    setOpen((v) => !v);
  };

  return (
    <>
      <div
        className={`${
          open ? "active" : ""
        } item-section flex flex-column pa-small mb-medium`}
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
              onClick={() => toggleItem(item)}
            >
              {isSelected(item) ? (
                <a
                  className={isSelected(item) ? "active" : ""}
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
            <h4 className="ml-large mb-0">{item.title}</h4>
          </div>
          <div className="section-actions flex flex-row">
            <div className="action-preview mr-small">
              <a
                className="btn btn-default btn-info"
                title="Preview"
                role="button"
                tabIndex="0"
                onClick={toggleSection}
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
        {open && (
          <div
            className="item-content pa-medium"
            dangerouslySetInnerHTML={{ __html: item.defaultText }}
          />
        )}
      </div>
    </>
  );
}
