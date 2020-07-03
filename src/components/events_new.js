import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { postEvent } from '../actions' //readEvents関数のインポート

class EventsNew extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
      // <div>
      //   <input {...input} placeholder={label} type={type} />
      //   {touched && error && <span>{error}</span>}
      // </div>
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props

    const style = { margin: 12 }

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
          <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
          <RaisedButton label="作成" type="submit" style={style} disabled={pristine || submitting || invalid} />
          <RaisedButton label="戻る" style={style} containerElement={<Link to="/" />} />
        </form>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "タイトルを入力してください"
  if (!values.body) errors.body = "内容を入力してください"

  return errors
}

//readEvents関数が外部のAPIサーバーに対してデータを取得する。readEvents関数はactionsで定義する。
const mapDispatchToProps = ({ postEvent })

// connect関数を使って、actionsとstateを関連付ける
export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
