import { makeStyles, Typography, Button, Input } from '@material-ui/core';
import { Container, Grid } from '@material-ui/core';
import React, {useState} from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useEffect } from 'react';
import { LavenderButton} from "../../Utils/styled-components/newColorsMaterial/coloredButton/coloredButtonComponent";
import { toast, ToastContainer } from 'react-toastify';
import { addToShoppingList } from '../../Store/actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    image:{
        width:"350px",
        height:"350px",
        objectFit:"contain"
    },
    invent:{
        border:"1px solid black",
        padding: "10px 20px",
        borderRadius:"4px",
    },
    responseGrid:{
        display:"flex",
        justifyContent:"center",
        [theme.breakpoints.up("md")]:{
            justifyContent:"flex-start",
        }
    },
    button:{
        color:"white"
    },
    textBody:{
        marginLeft:"60px",
        marginTop:"10px",
    }
}))

function ProductDetail({product}) {

    const dispatch = useDispatch();

    const classes = useStyles();

    const [numbers, setNumbers] = useState(1);
    
    const reduxList = useSelector(state => state.products.shoppingList)

    const shoppingHandler = () =>{
        const list = [...reduxList,{id: product.id, numbers: numbers, name: product.productName, price:product.price}]
        localStorage.setItem("shoppingList", JSON.stringify(list));
        dispatch(addToShoppingList({ id: product.id, numbers: numbers, name: product.productName, price: product.price }))
        toast.success("کالا به سبد خرید اضافه شد")
    }

    return (
        <Container maxWidth="md" >
            <Grid container alignItems="center" className={classes.responseGrid} direction="row" >
                <Grid item xs={10} md={5} >
                    <img className={classes.image} src={product.image} alt="product image" />
                </Grid>
                <Grid item xs={10} md={6} >
                    <Grid container direction="row" spacing={3}>
                        <Grid item>
                            <Typography variant="h5" >نام کالا:</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">{product.productName}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" spacing={3}>
                        <Grid item>
                            <Typography variant="h5" >دسته بندی:</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">{product.category}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" spacing={3}>
                        <Grid item>
                            <Typography variant="h5" >قیمت:</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">{product.price} تومان</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item direction="row" spacing={3}>
                        {product?.inventory ? <Grid container item direction="row" alignItems="center">
                            <div>
                                <Button onClick={() => setNumbers(numbers => numbers+=1)} ><ExpandLessIcon/></Button>
                                <Button onClick={() => numbers > 1 && setNumbers(numbers => numbers-=1)} ><ExpandMoreIcon/></Button>
                            </div>
                            <div className={classes.invent} >
                                <Typography variant="body1" >
                                    {numbers}
                                </Typography>
                            </div>
                        </Grid> : <Grid item alignItems="center"><Typography variant="h5" >پایان موجودی</Typography></Grid>}
                        <Grid item>
                            <LavenderButton onClick={() => shoppingHandler()} className={classes.button} disabled={product?.inventory ? false : true} >افزودن به سبد خرید</LavenderButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Typography variant="body1" >توضیحات کالا: </Typography>
            <Typography variant="body2" className={classes.textBody} >{product?.explanation}</Typography>
            <ToastContainer/>
        </Container>
    )
}

export default ProductDetail;
