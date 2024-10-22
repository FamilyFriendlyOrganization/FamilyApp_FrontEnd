
import { FETCH_USER_LOGIN_SUCCESS } from "../action/userAction";

const INIT_STATE = {
    account:{
        username:'',
        password:'',
        email:'',
        displayName:'',
        id: '',
        status:''
    }
}

const userReducer = (state = INIT_STATE, action) =>{
    switch(action.type){
        case FETCH_USER_LOGIN_SUCCESS :
            return {
                ...state,
                account:{
                    username: action.payload.username,
                    password: action.payload.password,
                    email: action.payload.email,
                    displayName: action.payload.displayName,
                    id: action.payload.accountId,
                    status: action.payload.accountStatus
                }
            }
            case "UPDATE_ACCOUNT":
                return {
                    ...state,
                    account: action.payload, // Cập nhật tài khoản mới vào Redux store
                };
            default: return state;
    }
    
}

export default userReducer