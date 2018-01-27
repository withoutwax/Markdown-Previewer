import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// Redux
import { Field, reduxForm } from 'redux-form';

const Form = (props) => {
  const { handleSubmit } = props;
  return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Markdown</label>
          <Field name="markdown" component="textarea" />
        </div>
        <div>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
  );
}

export default reduxForm({
  form: 'markdownForm',
})(Form);
