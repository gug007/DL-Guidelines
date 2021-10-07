import React from "react";

export default function Container({ children }) {
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
                      {children}
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
