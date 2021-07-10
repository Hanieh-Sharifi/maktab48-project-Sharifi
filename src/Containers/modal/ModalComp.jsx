import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material ui components
import { Fade, Modal, Backdrop, Button} from "@material-ui/core";

// components
import ModalContainer from './ModalContainer';

// material ui styles
import { modalMainStyles } from './modalStyles';



export default function ModalComp(props)
{

    const editRow = useSelector(state => state.todo);
    console.log(editRow);
    const classes = modalMainStyles();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();


    // opent and close modal
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        dispatch({type:"EDIT_ROW",payload:{}})
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
                open={open || ((editRow[0] && editRow[0].image)?true:false)}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open || ((editRow[0] && editRow[0].image)? true : false)}>
                    <div className={classes.paper}>
                        <Button className={classes.closeButton} onClick={() => handleClose()} >X</Button>
                        <ModalContainer/>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
