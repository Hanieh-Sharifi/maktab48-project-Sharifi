import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import MainPageHeader from "../../../Components/MainPageHeader";
import { Container, Grid, Toolbar, Button } from '@material-ui/core';
import { LavenderButton } from "../../../Utils/styled-components/newColorsMaterial/coloredButton/coloredButtonComponent";
import { ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router';

import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { clearShopppingList } from '../../../Store/actions/productsActions';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formParent:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"flex-end",
        margin:"auto"
    },
    button:{
        width:"223px",
        height:"56px",
        color:"white",
    }
}));

export default function LastPage() {

    const classes = useStyles();

    const history = useHistory();

    const dispatch = useDispatch();
    
    const [userInformation, setUserInformation] = useState({name:"",family:"",address:"",phone:"",data:""});

    return (
        <>
            <MainPageHeader/>
            <Toolbar/>
            <Container maxWidth="md" className={classes.formParent} >
                <Grid container spacing={4} alignItems="center" >
                    <Grid item container spacing={10}>
                        <Grid item>
                            <TextField value={userInformation.name} onChange={(e) => setUserInformation({...userInformation, name: e.target.value})} fullWidth label="نام" variant="filled" />
                        </Grid>
                        <Grid item>
                            <TextField value={userInformation.family} onChange={(e) => setUserInformation({ ...userInformation, family: e.target.value })} fullWidth label="نام خانوادگی" variant="filled" />
                        </Grid>
                    </Grid>

                    <Grid item container spacing={10}>
                            <Grid item>
                            <TextField value={userInformation.address} onChange={(e) => setUserInformation({ ...userInformation, address: e.target.value })} label="آدرس" variant="filled" />
                            </Grid>
                            <Grid item>
                            <TextField value={userInformation.phone} onChange={(e) => setUserInformation({ ...userInformation, phone: e.target.value })} label="تلفن همراه" variant="filled" />
                            </Grid>
                    </Grid>
                    <Grid item container justify="space-between">
                        <Grid item>
                            <TextField value={userInformation.date} onChange={(e) => setUserInformation({ ...userInformation, date: e.target.value })} label="تاریخ تحویل" variant="filled" />
                        </Grid>
                    </Grid>
                </Grid>
                <LavenderButton onClick={()=>{toast.success("پرداخت شد");localStorage.clear();dispatch(clearShopppingList());setTimeout(()=>{history.push("")},1500)}} disabled={userInformation.name && userInformation.family && userInformation.phone && userInformation.address && userInformation.date ? false : true} fullWidth className={classes.button}>پرداخت</LavenderButton>
            </Container>
            <ToastContainer/>
        </>
    );
}
