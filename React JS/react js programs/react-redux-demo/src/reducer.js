let initialState = {
    counter:10
}

function reducer(currentState=initialState,action){

    switch(action.type){
        case "INCREMENT": 
                return {...currentState,counter:currentState.counter+1}
        case "DECREMENT": 
                return {...currentState,counter:currentState.counter-1}
        default: 
            return currentState;
    }

}

export default reducer;