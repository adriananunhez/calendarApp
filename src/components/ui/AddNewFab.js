import React from 'react'
import { useDispatch } from 'react-redux'
import { uiOpenModal } from '../../actions/ui';

export const AddNewFab = ( e ) => {
   
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(uiOpenModal());
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={ handleClick }
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}
