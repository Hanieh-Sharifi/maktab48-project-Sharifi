import React from 'react';

import {deleteData} from "../../API/productApi";

import DeleteIcon from "@material-ui/icons/Delete";

import {FormControlLabel, IconButton} from "@material-ui/core";


function MaDelete({ index }){

    const handleEditClick = () => {
        deleteData(index)
    }


    return(
        <FormControlLabel
            control={
                <IconButton color="secondary" aria-label="add an alarm" onClick={handleEditClick} >
                    <DeleteIcon />
                </IconButton>
            }
        />
    )
};

export default MaDelete;