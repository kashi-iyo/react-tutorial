import React from 'react'
import ReactDOM from 'react-dom'

// store...reducerを元に作成され、アプリケーションの全てのコンポーネント内で使用できるようにする

import { createStore, applyMiddleware } from 'redux' //storeを作成するための関数を提供してくれる。applyMiddleware...redux-thunkを適用するための関数
import { Provider } from 'react-redux' // Provierは作成したstoreを全コンポーネントに渡すための機能を持つ
import thunk from 'redux-thunk' //redux-thunkはミドルウェアに該当する
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.css'
import reducer from './reducers'  // 状態を変更する機能が記述してあるファイル
import EventsIndex from './components/events_index.js'
import EventsNew from './components/events_new'

// ここで作られるstoreはアプリ内で唯一の物。アプリ内の全てのstateはこのstoreに集約される
// applyMiddleware(thunk)をcreateStoreの第二引数に渡すことで、thunkを使用できるようになる。
const store = createStore(reducer, applyMiddleware(thunk))

// Providerコンポーネント内に、他のコンポーネントをラップしてあげるだけでOK。
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/events/new" component={EventsNew} />
        <Route exact path="/" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
