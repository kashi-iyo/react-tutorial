// アプリケーション内に存在する全てのreducerを結合させる

import { combineReducers } from 'redux' //reducerを結合させる関数
import count from './count'

export default combineReducers({ count })
// 例：export default combineReducers({ foo, bar, baz })
