import {API} from '../Utils';
import { FETCH_PRODUCT_LIST } from './types';

//Make API request for the product data and send to reducer
export const fetchProductList = () => async dispatch=>{
    try{
        const response = await API.get('/product-info.json');
        
        dispatch({
            type: FETCH_PRODUCT_LIST,
            payload: response.data
        });
    }catch(err){
        console.log(err);
    }
}