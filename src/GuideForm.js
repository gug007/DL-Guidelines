export default function GuideForm({ onClose }) {
  return (
    <div className="create-new-guide pa-small pr-large">
      <form>
        <div className="form-group input-field">
          <div className="cf mb-small">
            <label htmlFor="new-guide-name">Guide Title</label>
            <a className="btn btn-primary right">
              <i className="fa fa-close" aria-hidden="true" /> Save
            </a>
            <a
              className="btn btn-default right mr-medium"
              title="Edit"
              role="button"
              tabIndex="0"
              onClick={onClose}
            >
              <i className="fa fa-eye" aria-hidden="true" /> Cancel
            </a>
          </div>
          <input
            type="text"
            name="new-guide-name"
            className="form-control input-default"
          />
          <input type="text" name="hidden-field" className="hidden" />
        </div>
      </form>
    </div>
  );
}
