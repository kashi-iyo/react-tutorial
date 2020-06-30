import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import { postEvent } from '../actions' //readEvents関数のインポート

class EventsNew extends Component {

  render() {
    return (
      <div>
      </div>
    )
  }
}

//readEvents関数が外部のAPIサーバーに対してデータを取得する。readEvents関数はactionsで定義する。
// const mapDispatchToProps = ({ postEvent })

// connect関数を使って、actionsとstateを関連付ける
export default connect(null, null)(EventsNew)
