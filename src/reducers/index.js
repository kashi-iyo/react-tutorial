// アプリケーション内に存在する全てのreducerを結合させる
// reducerは、アプリケーションの状態の変更を担う

import { combineReducers } from 'redux' //reducerを結合させるための関数
import count from './count'

export default combineReducers({ count }) // 例：export default combineReducers({ foo, bar, baz })
