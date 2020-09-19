import { ADD_ICE, DEDUCT_ICE } from './iceType'

const addIce = () => {
    return {
        type: ADD_ICE
    }
}

const deductIce = (payload) => {
    return {
        type: DEDUCT_ICE,
        payload
    }
}

export {
    addIce,
    deductIce
}