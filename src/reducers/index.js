import { combineReducers } from "redux";
import productReducer from "./productReducer";


export default combineReducers({
  productList: productReducer /** assign the product info data to store as productList */

});
