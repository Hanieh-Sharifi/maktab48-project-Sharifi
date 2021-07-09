import React, {useState} from 'react';

// material ui components
import { Fade, Modal, Backdrop, Button} from "@material-ui/core";

// components
import ModalContainer from './ModalContainer';

// material ui styles
import { modalMainStyles } from './modalStyles';



export default function ModalComp(props)
{

    const classes = modalMainStyles();
    const [open, setOpen] = useState(false);

    // opent and close modal
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
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
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Button className={classes.closeButton} onClick={() => handleClose()} >X</Button>
                        <ModalContainer/>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
