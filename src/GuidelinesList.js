import React from "react";
import { useHistory } from "react-router-dom";

export default function GuidelinesList({ list }) {
  const history = useHistory();
  return (
    <div id="guidelines-table" className="w-100 pr-large flex flex-column">
      <div className="dl-table-responsive">
        <table className="dl-table-responsive-content contact-grid">
          <thead>
            <tr>
              <th className="col-number">#</th>
              <th className="col-title sort-column">Title</th>
              <th className="col-created-by sort-column">Created By</th>
              <th className="col-created sort-column">Date Created</th>
              <th className="col-modified-by sort-column">Last Modified By</th>
              <th className="col-modified sort-column">Date Last Modified</th>
              <th className="">Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((guide) => (
              <tr key={guide.id}>
                <td className="col-number" data-title="#">
                  {guide.id}
                </td>
                <td className="col-name" data-title="title">
                  {guide.title}
                </td>
                <td className="col-title" data-title="createdBy">
                  {guide.createdBy}
                </td>
                <td className="col-email" data-title="createdDate">
                  {guide.createdDate}
                </td>
                <td className="col-contact-type" data-title="modifiedBy">
                  {guide.modifiedBy}
                </td>
                <td className="col-phone" data-title="modifiedDate">
                  {guide.modifiedDate}
                </td>
                <td className="col-actions" data-title="Actions">
                  <div className="btn-set">
                    <a
                      className="btn btn-primary open-modal edit-contact-modal-btn"
                      title="Edit"
                      role="button"
                      tabIndex="0"
                      onClick={() => history.push(`/${guide.id}`)}
                    >
                      <i className="fa fa-pencil" aria-hidden="true" />
                      <span>edit</span>
                    </a>
                    <a
                      className="btn btn-clone open-modal delete-contact-note-modal-btn"
                      title="Duplicate"
                      role="button"
                      tabIndex="0"
                    >
                      <i className="fa fa-clone" aria-hidden="true" />
                      <span>duplicate</span>
                    </a>
                    <a
                      className="btn btn-default open-modal delete-contact-note-modal-btn"
                      title="Delete"
                      role="button"
                      tabIndex="0"
                    >
                      <i className="fa fa-trash" aria-hidden="true" />
                      <span>delete</span>
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
