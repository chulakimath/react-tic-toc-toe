import React, { useContext } from 'react';
import MyButtonHandler from '../App';
const Button = ({ buttonHandle, text }) => {
    const buttons = useContext(MyButtonHandler);
    const handler = () => {
        buttonHandle();
    }
    return (
        <button
            onClick={handler}
            className='bg-gray-700 px-4 py-2 rounded-md w-fit m-4'>
            {text}
        </button>
    )
}

export default Button