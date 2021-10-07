import React, { useState } from "react";
import GuidelinesList from "./GuidelinesList";
import GuideForm from "./GuideForm";
import "./App.css";

const instructionsStepZero = "Step Zero: Lorem ipsum...";

export default function Guide() {
  const [newGuide, setNewGuide] = useState(null);

  return (
    <div id="main-container" className="admin dl-app">
      <span>
        <div className="dl-wrapper">
          <div className="main-container">
            <div className="dl-content-panel">
              <div className="dl-content-panel-wrap">
                <div className="dl-content-panel-container">
                  <div id="guidelines">
                    <div className="dl-content-item">
                      <h1>Guidelines</h1>
                      <p>{instructionsStepZero}</p>
                      <p className="cf pr-large">
                        <a
                          className="btn btn-default"
                          onClick={() => setNewGuide({})}
                        >
                          <i className="fa fa-plus" aria-hidden="true" /> Create
                          New Guideline
                        </a>
                      </p>
                      {newGuide && (
                        <GuideForm onClose={() => setNewGuide(null)} />
                      )}
                      <form action="submit">
                        <div className="dl-guidelines-container flex flex-row">
                          <GuidelinesList />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
}
