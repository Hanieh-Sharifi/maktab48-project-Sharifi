import React from 'react';
import { useDispatch } from 'react-redux';

// material ui components
import { TextField } from "@material-ui/core";
import { SunShineButton } from '../../Utils/styled-components/newColorsMaterial/coloredButton/coloredButtonComponent';

// material ui styles
import { modalContainerStyles } from "./modalStyles";
import { putOrder } from '../../API/ordersApi';
import { updateRowStatus, unSelectRow } from '../../Store/actions/ordersActions';
import OrderTable from './OrderTable';


function ModalContainer({data}) {

    const classes = modalContainerStyles();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleClick = () => {
        putOrder(data);
        dispatch(unSelectRow());
        dispatch(updateRowStatus(data));
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} className={classes.root} noValidate autoComplete="off">
                <TextField label={"نام مشتری"} value={data.customerName} readOnly fullWidth variant="outlined"/>
                <TextField label={"آدرس"} value={data.customerAddress} multiline={true} readOnly fullWidth variant="outlined" />
                <TextField label={"تلفن"} value={data.telephone} readOnly fullWidth variant="outlined" />
                <TextField label={"زمان تحویل"} value={data.arriveTime} readOnly fullWidth variant="outlined" />
                <TextField label={"زمان سفارش"} value={data.orderTime} readOnly fullWidth variant="outlined" />
                <OrderTable data={data.orderList} />
                {data.status === "done" && <div><p>تاریخ تحویل: {data.arriveTime}</p></div>}
                {data.status==="notDone" && <SunShineButton onClick={() => handleClick()} className={classes.button} fullWidth type="submit" variant="contained">تحویل داده شد</SunShineButton>}
            </form>
        </div>
    )
}

export default ModalContainer;
