import { Field, Form } from "react-final-form";

export default function GuideForm({ onSave, onClose }) {
  const handleSave = (values) => {
    onSave(values.name);
    onClose();
  };

  return (
    <Form
      onSubmit={handleSave}
      render={({ handleSubmit }) => (
        <div className="create-new-guide pa-small pr-large">
          <form onSubmit={handleSubmit}>
            <div className="form-group input-field">
              <div className="cf mb-small">
                <label htmlFor="new-guide-name">Guide Title</label>
                <button
                  style={{ margin: 0 }}
                  className="btn btn-primary right"
                  type="submit"
                >
                  <i className="fa fa-close" aria-hidden="true" /> Save
                </button>
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
              <Field
                name="name"
                component="input"
                className="form-control input-default"
              />
              <input type="text" name="hidden-field" className="hidden" />
            </div>
          </form>
        </div>
      )}
    />
  );
}
