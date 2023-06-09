import {
 PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/categoryContants";


//get notes
export const categoryListReducer = (state = { category: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, category: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


//create notes
export const categoryCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


//delete notes
export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case  PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case  PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case  PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};


//update notes
export const productUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case  PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case  PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case  PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};