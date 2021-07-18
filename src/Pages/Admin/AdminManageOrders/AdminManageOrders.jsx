import React, {useState} from 'react';
import {Container, Grid, Typography, FormControlLabel, Checkbox} from "@material-ui/core";
import {useStyles} from "./adminOrdersStyles";

import OrdersManagementTable from "../../../Containers/orders-management-table/OrdersManagementTable";
import ModalComp from '../../../Containers/orders-management-modal/ModalComp';

function AdminManageOrders() {

    const classes = useStyles();

    const [checked, setChecked] = useState(true);

    return (
        <Container maxWidth="xl" align="center">
            <Grid container justify="center">
                <Grid container item md={4} xs={12} className={classes.textParent}>
                    <Typography variant="h5" component="h4" >
                        مدیریت سفارش ها
                    </Typography>
                </Grid>
                <Grid container item md={8} xs={12} className={classes.textParent}>
                    <Grid item md={6} sm={6} xs={12}>
                        <FormControlLabel
                            value="start"
                            control={<Checkbox color="primary" />}
                            label="سفارش های تحویل شده"
                            labelPlacement="start"
                            className={classes.formLabel}
                            checked={!checked}
                            onChange={() => setChecked(!checked)}
                        />
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                        <FormControlLabel
                            value="start"
                            control={<Checkbox color="primary" />}
                            label="سفارش های در انتظار ارسال"
                            labelPlacement="start"
                            className={classes.formLabel}
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <ModalComp/>
            <OrdersManagementTable checked={checked} />
        </Container>
    )
}

export default AdminManageOrders;
