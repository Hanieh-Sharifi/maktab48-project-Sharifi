import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material ui components
import { Fade, Modal, Backdrop, Button } from "@material-ui/core";

// components
import ModalContainer from './ModalContainer';

// material ui styles
import { modalMainStyles } from './modalStyles';

// redux actions
import { unSelectRow } from '../../Store/actions/ordersActions';



function ModalComp() {

    const classes = modalMainStyles();
    const selectedOrder = useSelector(state => state.orders.editOrder)

    const dispatch = useDispatch();

    // dispatching for making the selected row in redux empty
    const handleClose = () => {
        dispatch(unSelectRow())
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={selectedOrder.status ? true : false}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={selectedOrder.status ? true : false} >
                    <div className={classes.paper}>
                        <Button className={classes.closeButton} onClick={() => handleClose()} >X</Button>
                        <ModalContainer handleClose={() => handleClose()} data={selectedOrder} />
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default ModalComp;