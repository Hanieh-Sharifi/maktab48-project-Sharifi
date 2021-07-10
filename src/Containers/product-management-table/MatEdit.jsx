import React from 'react';

import {useDispatch} from "react-redux";

import EditIcon from "@material-ui/icons/Edit";

import {IconButton, FormControlLabel} from "@material-ui/core";
import { selectedProduct } from '../../Store/actions/selectedProductActions';


function MatEdit({data}) {

    const dispatch = useDispatch();

    const handleEditClick = () => {
        dispatch(selectedProduct(data));
    }


    return (
        <FormControlLabel
            control={
                <IconButton color="secondary" aria-label="add an alarm" onClick={handleEditClick} >
                    <EditIcon />
                </IconButton>
            }
        />
    )
}

export default MatEdit;
