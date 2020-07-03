import React, { Component } from 'react';
// connect関数のインポート
import { connect } from 'react-redux'
import { readEvents } from '../actions' //readEvents関数のインポート
import _ from 'lodash'
import { Link } from 'react-router-dom'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class EventsIndex extends Component {

  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`} >
            {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  render() {

    const style = {
      position: "fixed",
      right: 12,
      bottom: 12
    }

    return (
      <div>
         <FloatingActionButton style={style} containerElement={<Link to="/events/new" />}>
          <ContentAdd />
         </FloatingActionButton>

         <Table>
           <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
           >
             <TableRow>
               <TableHeaderColumn>ID</TableHeaderColumn>
               <TableHeaderColumn>Title</TableHeaderColumn>
               <TableHeaderColumn>Body</TableHeaderColumn>
             </TableRow>
           </TableHeader>

           <TableBody displayRowCheckbox={false}>
             {this.renderEvents()}
           </TableBody>
         </Table>
         <Link to="/events/new">New Event</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({ events: state.events }) //イベント一覧の取得

//readEvents関数が外部のAPIサーバーに対してデータを取得する。readEvents関数はactionsで定義する。
const mapDispatchToProps = ({ readEvents })

// connect関数を使って、actionsとstateを関連付ける
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
