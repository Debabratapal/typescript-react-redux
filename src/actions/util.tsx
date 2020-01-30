import {SNACK, POPULATE_SIDEBAR, CLEAR_SIDEBAR, IS_AUTHENTICATED} from '../constant';
// import {uuidx} from '../helper/utils'; 
// import { API } from '../helper/config';


// export const showSnack = (dispatch, message) =>
//   dispatch({ type: SNACK, snack: { id: uuidx(), message } });

// export const sidebarItem = (dispatch, isLogedIn) => {
//   if(isLogedIn) {
//   fetch(API.sidebar, {
//     method: 'GET',
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     credentials: "include",
//   })
//   .then(res => res.json())
//   .then(data => {
//     if(Array.isArray(data)) {
//       dispatch({
//         type: POPULATE_SIDEBAR,
//         data: data
//       })
//     }
//   })
//   } else {
//     dispatch({
//       type: CLEAR_SIDEBAR
//     })
//   }
// }

// export const getUser = () => dispatch => {
//   fetch(`${API.getuser}`, {
//     method: 'GET',
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     credentials: "include",
//   })
//   .then(res => res.json())
//   .then(data => {
//     if (data.loggedIn) {
//       dispatch({
//         type: IS_AUTHENTICATED,
//         user: data
//       });
//       sidebarItem(dispatch, true);
//     } else {
//       showSnack(dispatch, "Please Login");
//     }
//   })
// }
