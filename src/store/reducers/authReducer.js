const initialState = {
    authError:'',
    response:''
}

const AuthReducer = (state = initialState,action) => {
    console.log('AuthReducer')
    console.log(action.type)

    switch (action.type) {
        case 'USER_CREATION_SUCESS':
             return {
                 ...state,authError:null
             }
        case 'USER_CREATION_FAILED':
            console.log('USER_CREATION_FAILED')
            console.log(action.err)
             return {
                 ...state,authError:action.err
        }
        case 'LOGIN_SUCCESS':
            return {
            ...state,authError:null
        }
        case 'LOGIN_ERROR':
            return {
            ...state,authError:action.err
        }
        case  'LOGOUT_SUCCESS':
            return {
            ...state,authError:null
        }
        case  'LOGOUT_FAILURE':
            return {
                ...state,authError:action.err
            }
        default:
            return state
    }
}


export default AuthReducer;