import React, { useState } from 'react';
import propTypes from 'prop-types'

const Input = ({ item, ChangeclickHandler, id }) => {
    const [state,setState]=useState(false)
    const handleClick = (e) => {
        ChangeclickHandler(e.target.id)
        setState(true)
    }
    return (
        <div
            onClick={handleClick}
            id={id}
            className={`w-[75px] md:w-[100px] aspect-square flex justify-center items-center ${state?'bg-white':'bg-white/40'} font-semibold text-3xl`}>
            {item}
        </div>
    )
}
// for type checking
Input.propTypes={
    item:propTypes.string,
    ChangeclickHandler:propTypes.func,
    id:propTypes.number,
}
export default Input