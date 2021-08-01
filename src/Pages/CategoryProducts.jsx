import { Container, Grid } from '@material-ui/core';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductsCard from '../Components/ProductsCard';
import MainPageHeader from "../Components/MainPageHeader";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        "& a": {
            textDecoration: "none",
            color: "black",
        }
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

function CategoryProducts() {

    const classes = useStyles();

    const { category } = useParams();

    const [persianCategory,setPersianCategory] = useState(category === "لبنیات" ? "نوشیدنی" : "لبنیات");

    const [Products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(data => setProducts(data.data))
            .catch(console.log)
    }, [])


    return (
        <div className={classes.root}>
            <CssBaseline />
            <MainPageHeader classnames={classes.appBar} />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <List>
                    <ListItem button key={"لبنیات"} onClick={()=>setPersianCategory("لبنیات")} >
                        <ListItemText primary={"لبنیات"} />
                    </ListItem>
                </List>
                <List>
                    <ListItem button key={"نوشیدنی"} onClick={()=>setPersianCategory("نوشیدنی")} >
                        <ListItemText primary={"نوشیدنی"} />
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content} >
                <div className={classes.toolbar} />
                <Container maxWidth="lg" >
                    <Grid container justify="space-around">
                        {Products?.filter(item => item.category === persianCategory).map((item) => <Grid item ><Link to={`/product/${item.id}`} ><ProductsCard name={item.productName} price={item.price} image={item.image} /></Link></Grid>)}
                    </Grid>
                </Container>
            </main>
        </div>
    )
}

export default CategoryProducts
