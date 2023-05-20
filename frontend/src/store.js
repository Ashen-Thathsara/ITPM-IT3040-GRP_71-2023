import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer,userRegisterReducer } from './reducers/userReducers';
import { categoryCreateReducer, categoryListReducer, productDeleteReducer, productUpdateReducer } from './reducers/categoryReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  categoryList : categoryListReducer,
  categoryCreate: categoryCreateReducer,
  categoryUpdate : productUpdateReducer,
  noteDelete : productDeleteReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
?JSON.parse(localStorage.getItem("userInfo"))
:null


const initialState= {
 userLogin:{userInfo:userInfoFromStorage}
}

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;