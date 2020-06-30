import React, { Component } from 'react';

// connect関数のインポート
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

// const App = () => (<Counter></Counter>)

class App extends Component {

  render() {
    const props = this.props

    return (
      <div>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

// connect関数を使って、actionsとstateを関連付ける
export default connect(mapStateToProps, mapDispatchToProps)(App)
