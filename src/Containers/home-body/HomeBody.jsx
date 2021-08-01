import { makeStyles } from '@material-ui/core';
import { Typography,Container } from '@material-ui/core';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsCard from '../../Components/ProductsCard';

const useStyles = makeStyles({
    parent:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop:"30px",
        "& a": {
            textDecoration: "none",
            color:"black",
        }
    },
    cardParent:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        width:"90%",
        flexWrap:"wrap",
        marginTop:"10px",
        marginBottom:"30px",
        "& a":{
            textDecoration:"none"
        }
    },
    children:{
        display:"flex",
        flexDirection: "column",
        justifyContent:"space-around",
        alignItems:"flex-start",
        margin:"10px",
        "& h5":{
            marginBottom:"30px",
        }
    }
});

function HomeBody() {

    const classes = useStyles();

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get(" http://localhost:5000/products")
        .then(data => setProducts(data.data))
        .catch(error => console.log(error))
    },[])

    products.map((item) => console.log(item.category))

    return (
        <div className={classes.parent}>
            <Container className={classes.children} maxWidth="lg">
                <Link to="/products/dairy" >
                    <Typography variant="h5" component="h5">
                        لبنیات
                    </Typography>
                </Link>
                <div className={classes.cardParent}>
                    {products?.map((item) => { return item.category === "لبنیات" && <Link to={`/product/${item.id}`}><ProductsCard name={item.productName} price={item.price} image={item.image} /></Link>})}
                </div>
            </Container>
            <Container className={classes.children} maxWidth="lg">
                <Link to="products/drink" >
                    <Typography variant="h5" component="h5">
                        نوشیدنی
                    </Typography>
                </Link>
                <div className={classes.cardParent}>
                    {products?.map((item) => { return item.category === "نوشیدنی" && <Link to={`/product/${item.id}`}><ProductsCard name={item.productName} price={item.price} image={item.image} /></Link> })}
                </div>
            </Container>
        </div>
    )
}

export default HomeBody
