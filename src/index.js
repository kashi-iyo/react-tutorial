import React from 'react'
import ReactDOM from 'react-dom'

// store...reducerを元に作成され、アプリケーションの全てのコンポーネント内で使用できるようにする

import { createStore, applyMiddleware } from 'redux' //storeを作成するための関数を提供してくれる。applyMiddleware...redux-thunkを適用するための関数
import { Provider } from 'react-redux' // Provierは作成したstoreを全コンポーネントに渡すための機能を持つ
import thunk from 'redux-thunk' //redux-thunkはミドルウェアに該当する
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

import './index.css'
import reducer from './reducers'  // 状態を変更する機能が記述してあるファイル
import EventsIndex from './components/events_index.js'
import EventsNew from './components/events_new'
import EventsShow from './components/events_show'

// ここで作られるstoreはアプリ内で唯一の物。アプリ内の全てのstateはこのstoreに集約される
// applyMiddleware(thunk)をcreateStoreの第二引数に渡すことで、thunkを使用できるようになる。
const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

// Providerコンポーネント内に、他のコンポーネントをラップしてあげるだけでOK。
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/events/new" component={EventsNew} />
        <Route path="/events/:id" component={EventsShow} />
        <Route exact path="/" component={EventsIndex} />
        <Route exact path="/events" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
