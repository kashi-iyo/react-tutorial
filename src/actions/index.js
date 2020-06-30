// action...JavaScriptのオブジェクトのこと。そのオブジェクトの内部ではtypeと言うキーと、typeに対応する値を持つ
// そのtypeの値はユニークなものでなければならない

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// INCREMENT側のアクション
export const increment = () => ({
  type: INCREMENT
})

// DECREMENT側のアクション
export const decrement = () => ({
  type: DECREMENT
})
