// アプリケーション内に存在する全てのreducerを結合させる
// reducerは、アプリケーションの状態の変更を担う

import { combineReducers } from 'redux' //reducerを結合させるための関数
import events from './events'

export default combineReducers({ events }) // 例：export default combineReducers({ foo, bar, baz })
