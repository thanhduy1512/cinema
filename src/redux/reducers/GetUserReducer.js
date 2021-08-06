import { GET_USER_API } from "../constants/GetUserConstants"

const secondState = {
    userList: [],
}

export default (state = secondState, action) => {
    switch (action.type) {

        case GET_USER_API:
            state.userList = action.userList;
            return { ...state }
            break;

        default:
            return state
    }
}