// import { MAKE_ORDER } from './ActionTypes'

import { BUY_BAT } from "./ActionTypes"

export const makeOrder = (PRODUCT_TYPE) => {
  return {
    type:PRODUCT_TYPE
  }
}
export const buyBat = (buycount=1) => {
  return {
    type:BUY_BAT,
    payload:buycount
  }
}


