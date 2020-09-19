import { ADD_ICE, DEDUCT_ICE } from './iceType'
const initialState = {
    numOfIce: 9
}

const iceReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ICE:
            return {
                ...state,
                numOfIce: state.numOfIce + 1
            }
        case DEDUCT_ICE: {
            return {
                ...state,
                numOfIce: state.numOfIce + action.payload
            }
        }
        default: return state
    }
}

export default iceReducers