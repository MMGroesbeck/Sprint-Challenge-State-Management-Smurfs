export const initialState = {
    name: "Enter Name",
    age: "Enter Age",
    height: "Enter Height",
    error: ""
}

export const formReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_FORM":
            return {
                ...state,
                name: action.payload.name,
                age: action.payload.age,
                height: action.payload.height,
                error: "",
                id: Date.now()
            };
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload
            };
        default: return state;
    }
}