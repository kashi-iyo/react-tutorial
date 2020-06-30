import React, { Component } from 'react';

// connect関数のインポート
import { connect } from 'react-redux'
import { readEvents } from '../actions' //readEvents関数のインポート

import _ from 'lodash'

class EventsIndex extends Component {

  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {this.renderEvents()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({ events: state.events }) //イベント一覧の取得

//readEvents関数が外部のAPIサーバーに対してデータを取得する。readEvents関数はactionsで定義する。
const mapDispatchToProps = ({ readEvents })

// connect関数を使って、actionsとstateを関連付ける
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
