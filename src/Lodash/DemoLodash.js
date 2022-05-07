import React from 'react'
import _ from 'lodash'
export default function DemoLodash() {
  let arr = ['duc', ' hao', 'cuong']
  const resultLodash = _.join(arr, '//')
  return <div>{resultLodash}</div>
}
