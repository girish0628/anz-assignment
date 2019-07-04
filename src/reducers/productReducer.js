import { FETCH_PRODUCT_LIST } from "../actions/types";
const initialState = {
    product_info: {}
}

// Fetch the data and send to store
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_LIST:
      return {
        ...state,
        product_info: action.payload
      }
    default:
      return state;
  }
};
