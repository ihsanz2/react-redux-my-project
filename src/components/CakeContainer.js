import React from 'react'
import { buyCake, addIce, deductIce } from './redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
    console.log(props)

    return (
        < div >
            <h1>ADD ICE  {props.numOfIce}</h1>
            <button onClick={() => props.deductIce(2)}>+</button>
            <br></br>
            <h1>Cake cakeContainer {props.numOfCakes}</h1>
            <button onClick={props.buyCake}>+</button>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes,
        numOfIce: state.ice.numOfIce
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => { dispatch(buyCake()) },
        addIce: () => dispatch(addIce()),
        deductIce: (payload) => dispatch(deductIce(payload))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
