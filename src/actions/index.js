// action...JavaScriptのオブジェクトのこと。そのオブジェクトの内部ではtypeと言うキーと、typeに対応する値を持つ
// そのtypeの値はユニークなものでなければならない

//リクエストを送信するHTTPクライアントをインポート
import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const READ_EVENT = 'READ_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'

// イベントの取得、作成、更新、削除時にベースとなるURL
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
// curlコマンドでAPIサーバーと通信したときに叩いたもの
const QUERYSTRING = '?token=token123'

// readEventsに対して、外部のAPIサーバーに対してリクエストを送信する機能を実装する。
// readEventsの中で非同期処理を実行することは許されないが、それを可能にするパッケージが存在する。
// それが、redux-thunk
// 関数の中でdispatchできるようになる。dispatchはreducerに送られる
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  dispatch({ type: READ_EVENTS, response })
}

export const postEvent = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
  dispatch({ type: CREATE_EVENT, response })
}

export const putEvent = values => async dispatch => {
  const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values)
  dispatch({ type: UPDATE_EVENT, response })
}

export const getEvent = id => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
  dispatch({ type: READ_EVENT, response })
}

export const deleteEvent = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
  dispatch({ type: DELETE_EVENT, id })
}
