
import { FETCH_USER_LOGIN_SUCCESS } from "../action/userAction";
import { FETCH_USER_LOGOUT_SUCCESS } from "../action/userAction";
const INIT_STATE = {
    account:{
        token:'',
        username:'',
        email:'',
        displayName:'',
        id: '',
        status:'',  
    },
    familyId: '',
    isAuthenticated : false
}

const userReducer = (state = INIT_STATE, action) =>{
    switch(action.type){
        case FETCH_USER_LOGIN_SUCCESS :
            return {
                ...state,
                account:{
                    token:action.payload.token,
                    username: action.payload.username,
                    email: action.payload.email,
                    displayName: action.payload.displayName,
                    id: action.payload.accountId,
                    status: action.payload.accountStatus,
                },
                familyId: '',
                isAuthenticated : true,  
            };
            case "CHOOSE_FAMILY":
                return {
                    ...state,
                    familyId: action.payload 
                };
            
        case "UPDATE_ACCOUNT":
            return {
                ...state,
                account: action.payload, 
                isAuthenticated: true
            };
        case FETCH_USER_LOGOUT_SUCCESS:
            return{
                ...state, account:{
                    token:'',
                    username: '',
                    email: '',
                    displayName: '',
                    id: '',
                    status: '',
                    familyId: ''
                },
                isAuthenticated:false
            }
        default: return state;
    }
    
}

export default userReducer