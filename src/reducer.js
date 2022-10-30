/**
 * Data the DataLayer is listening for
 */
export const initialState = {
    token: null,
    user: null,
};

const reducer = (state, action) => {
    console.log(action);

    switch(action. type) {

        // Return current state with the token updated
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        
        // Return current state with the user updated
        case "SET_USER":
            return {
                ...state, 
                user: action.user,
            };

        
        // Return unmodified state
        default: 
            return state;
    }
};

export default reducer;