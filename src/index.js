import React from 'react'
import ReactDOM from 'react-dom'

// store...reducerを元に作成され、アプリケーションの全てのコンポーネント内で使用できるようにする

import { createStore } from 'redux' //storeを作成するための関数を提供してくれる
import { Provider } from 'react-redux' // Provierは作成したstoreを全コンポーネントに渡すための機能を持つ

import reducer from './reducers'  // 状態を変更する機能が記述してあるファイル
import App from './components/App.js'
import './index.css'

const store = createStore(reducer)  // ここで作られるstoreはアプリ内で唯一物。アプリ内の全てのstateはこのstoreに集約される

// Providerコンポーネント内に、他のコンポーネントをラップしてあげるだけでOK。
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
