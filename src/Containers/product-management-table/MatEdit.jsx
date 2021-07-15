import React from 'react';

import {useDispatch} from "react-redux";

import EditIcon from "@material-ui/icons/Edit";

import {IconButton, FormControlLabel} from "@material-ui/core";

// redux action to edit a product
import { selectedRowForEdit } from '../../Store/actions/productsActions';


function MatEdit({data}) {

    const dispatch = useDispatch();

    const handleEditClick = () => {
        dispatch(selectedRowForEdit(data));
    }


    return (
        <FormControlLabel
            control={
                <IconButton onClick={handleEditClick} >
                    <EditIcon />
                </IconButton>
            }
        />
    )
}

export default MatEdit;
