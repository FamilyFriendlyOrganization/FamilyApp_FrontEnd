export const FETCH_USER_LOGIN_SUCCESS = 'Fetch_User_Login_Success'
export const FETCH_USER_LOGOUT_SUCCESS = 'Fetch_User_Logout_Success'
export const doLogin = (data) =>{
    return {
        type: FETCH_USER_LOGIN_SUCCESS,
        payload:data
    }
}

export const updateAccount = (data) => {
    return {
      type: "UPDATE_ACCOUNT",
      payload: data,
    };
  };
  
export const doLogout = () =>{
  return{
    type: FETCH_USER_LOGOUT_SUCCESS
  }
}