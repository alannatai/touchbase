import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createBase } from '../../actions/basesActions';

class BaseCreatePage extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <div>{error}</div>;
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div className='field'>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.createBase(formValues);
  };

  render() {
    return (
      <div className='page'>
        <div className='card'>
          <div className='info-container'>BASE CREATE</div>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              name='name'
              component={this.renderInput}
              label='Enter Base name'
            />
            <Field
              name='imageUrl'
              component={this.renderInput}
              label='Enter Image URL'
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

function validate(formValues) {
  const errors = {};

  if (!formValues.name) {
    errors.name = 'Base must have a name';
  }

  return errors;
}

const formWrapped = reduxForm({
  form: 'baseCreate',
  validate,
})(BaseCreatePage);

export default connect(null, { createBase })(formWrapped);
