import React from 'react';

import DeleteIcon from "@material-ui/icons/Delete";

import {FormControlLabel, IconButton} from "@material-ui/core";

import { useDispatch } from 'react-redux';

// redux action, to delete a product
import { deleteItemApi } from '../../Store/actions/productsActions';


function MaDelete({ index }){

    const dispatch = useDispatch();

    const handleEditClick = () => {
        dispatch(deleteItemApi(index));
    }

    return(
        <FormControlLabel
            control={
                <IconButton onClick={() => handleEditClick()} >
                    <DeleteIcon />
                </IconButton>
            }
        />
    )
};

export default MaDelete;