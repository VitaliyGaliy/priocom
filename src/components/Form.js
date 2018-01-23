import React, { Component } from 'react'
import { Field, reduxForm, propTypes } from 'redux-form'
import validWebColor from 'valid-web-color'
import { connect } from 'react-redux'

const validate = values => {
  const errors = {}

  const isValidColor = validWebColor(values.color)
  if (!isValidColor) {
    errors.color = 'You wrote an incorrect type, correct is: #fff, #ffffff, white, rgb(255,255,255), rgba(255,255,255, 1), hsl(0, 0%,100%), hsla(0, 0%, 100%, 1)'
    errors.description = 'Required'
  }
  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div className='formsItem'>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>))}
    </div>
  </div>
)

class ContactForm extends Component {

  static propTypes = {
    ...propTypes
  }

  submit = ({ title, color }) => {
    const { id } = this.props.editedItem;
    this.props.saveChanges({ title, color, id })
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="formWrapper">
        <form onSubmit={handleSubmit(this.submit)}>
          <Field name="title"
                 type="text"
                 component={renderField}
                 label="Title"
                 meta={{initial: 'bjmbkmjbnkjm'}}
          />
          <Field name="color"
                 type="text"
                 component={renderField}
                 label="Color"
                 initialValue='kiuhiukhj,j'
          />
          <button className='formsButton btn dtn-primary' type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

ContactForm = reduxForm({
  form: 'edit',
  validate,
  enableReinitialize: true
})(ContactForm)

ContactForm = connect(
  state => ({
    initialValues: state.square.editedItem,
    editedItem: state.square.editedItem,
  })
)(ContactForm)

export default ContactForm
