import React from 'react';
import {Field, reduxForm} from 'redux-form'

class StreamForm extends React.Component{
  renderInput=({input,label, meta})=>{
    //if user touched field and error exists
    const className=`field ${meta.error && meta.touched ? 'error': ''}`

    return(
      <div className={className}>
        <label>{label}</label>
        <input {...input}/>
        {this.renderError(meta)}
      </div>
    )
  }

  renderError({error, touched}){
    if(touched && error){
      return (
        <div className='ui error message'>
          <div className='header'>
            {error}
          </div>
        </div>
      )
    }
  }

  onSubmit=(formValues)=>{
    this.props.onSubmit(formValues);
  }

  //field component acts as middleman between redux store and form
  //this.props.handleSubmit is a callback function provided by redux-form, our on submit gets called with whatever
  //was in the form (formValues)
  render(){
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
        <Field name='title' component ={this.renderInput} label='Enter Title'/>
        <Field name='description'component ={this.renderInput} label='Enter Description'/>
        <button className='ui button primary'>Submit</button>
      </form>
  )};
}

const validate=(formValues)=>{
  const errors={};
  if(!formValues.title){
    errors.title= 'You must enter a title.';
  }
  if(!formValues.description){
    errors.description= 'You must enter a description.';
  }
  return errors;
}

export default reduxForm({
  form:'streamForm',
  validate
})(StreamForm);
