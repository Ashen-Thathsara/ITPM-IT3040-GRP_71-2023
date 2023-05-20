// import { 
//     USER_LOGIN_FAIL, 
//     USER_LOGIN_LOGOUT, 
//     USER_LOGIN_REQUEST, 
//     USER_LOGIN_SUCCESS, 
//     USER_REGISTER_FAIL, 
//     USER_REGISTER_REQUEST,
//     USER_REGISTER_SUCCESS} 
// from "../constants/usersContants"
// import axios from 'axios';



// export const login = (email, password) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_LOGIN_REQUEST });

//     const config = {
//       headers: {
//         "Content-type": "application/json",
//       },
//     };

//     const { data } = await axios.post(
//       "/api/users/login",
//       { email, password },
//       config
//     );

//     dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

//     localStorage.setItem("userInfo", JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: USER_LOGIN_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };


// //logout action
// export const logout =()=> async(dispatch)=>{
//   localStorage.removeItem("userInfo");
//   dispatch({type: USER_LOGIN_LOGOUT});
// }

// //register action

// export const register = (name, email, password, pic) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_REGISTER_REQUEST });

//     const config = {
//       headers: {
//         "Content-type": "application/json",
//       },
//     };

//     const { data } = await axios.post(
//       "/api/users",
//       { name, pic, email, password },
//       config
//     );

//     dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

//     dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

//     localStorage.setItem("userInfo", JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: USER_REGISTER_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS
}
  from "../constants/usersContants"
import axios from 'axios';



export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password, isUser: true },
      config
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    // swal({
    // 	title: "Success !!!",
    // 	text: "User Log In Successful.",
    // 	icon: "success",
    // 	timer: 2000,
    // 	button: false,
    // });

    console.log(data.type);

    if (data.type == 'admin') {
      setTimeout(function () {
        window.location.href = "/category";
      }, 2000);
      localStorage.setItem("adminInfo", JSON.stringify(data));
    } else if (data.type == 'user') {
      setTimeout(function () {
        window.location.href = "/";
      }, 2000);
      localStorage.setItem("userInfo", JSON.stringify(data));
    }

  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


//logout action
export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGIN_LOGOUT });
  setTimeout(function () {
    window.location.href = "/login"
  }, 2000)
}

//register action

export const register = (name, email, password, pic) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { name, pic, email, password },
      config
    );

    console.log(data.type);



    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

