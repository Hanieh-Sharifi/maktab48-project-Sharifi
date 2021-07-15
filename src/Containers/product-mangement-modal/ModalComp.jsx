import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material ui components
import { Fade, Modal, Backdrop, Button} from "@material-ui/core";

// components
import ModalContainer from './ModalContainer';

// material ui styles
import { modalMainStyles } from './modalStyles';

// redux actions
import { unSelectRowForEdit } from '../../Store/actions/productsActions';



export default function ModalComp(props)
{
    // get selected row for edit with redux
    const editRow = useSelector(state => state.products.editedRow);
    const classes = modalMainStyles();

    // set modal situtation
    const [open, setOpen] = useState(false);


    const dispatch = useDispatch();

    // opent and close modal
    const handleOpen = () => {
        setOpen(true);
    };

    // dispatching for making the selected row in redux empty
    const handleClose = () => {
        dispatch(unSelectRowForEdit())
        setOpen(false);
    };

    return (
        <div>
            <div onClick={handleOpen}>
                {props.children}
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open || ((editRow!=={} && editRow.image)?true:false)}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open || ((editRow!=={} && editRow.image)? true : false)}>
                    <div className={classes.paper}>
                        <Button className={classes.closeButton} onClick={() => handleClose()} >X</Button>
                        <ModalContainer handleClose={() => handleClose()} />
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
