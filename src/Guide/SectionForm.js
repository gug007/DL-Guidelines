import { Form, Field } from "react-final-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function SectionForm({ onSave, onClose }) {
  const handleSave = (values) => {
    onSave(values);
    onClose();
  };

  return (
    <Form
      onSubmit={handleSave}
      render={({ handleSubmit }) => (
        <div className="create-new-section pa-small pr-large">
          <form onSubmit={handleSubmit}>
            <div className="form-group input-field">
              <div className="cf mb-small">
                <label htmlFor="new-section-name">Section Name</label>
                <button
                  type="submit"
                  className="btn btn-primary right"
                  style={{ margin: 0 }}
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
                placeholder="Section Name"
                className="form-control input-default"
              />
            </div>
            <div className="form-group input-field">
              <label htmlFor="section-name">Section Content</label>
              <Field name="data">
                {({ input, meta }) => (
                  <CKEditor
                    editor={ClassicEditor}
                    data={input.value}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      input.onChange(data);
                    }}
                  />
                )}
              </Field>
            </div>
          </form>
        </div>
      )}
    />
  );
}
