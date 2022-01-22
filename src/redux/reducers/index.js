export const reducer1 = (state={}, action) => {

    switch(action.type){
        case "EMAIL":
            state = {...state, email: action.payload.email}
            return state
        case "PHONE":
            state = {...state, phone: action.payload.phone}
            return state 
            case "FNAME":
                state = {...state, fname: action.payload}
            return state
        case "ACCID":
            state = {...state, accId: action.payload + '.near'}
            return state
        case "PASSWORD":
            state = {...state, password: action.payload.Pass}
            return state
        default: 
            return state
    }
}