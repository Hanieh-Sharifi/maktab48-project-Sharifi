import React from 'react';
import {Container} from "@material-ui/core";
import { useParams } from 'react-router-dom';
import MainPageHeader from "../../Components/MainPageHeader";
import ProductDetail from '../../Containers/product-detail/ProductDetail';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MainProduct() {

    const {id} = useParams();

    const [product, setProduct] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:5000/products/${id}`)
        .then(data => setProduct(data.data))
        .catch(error => console.log(error))
    },[])

    return (
        <>
            <MainPageHeader/>
            <ProductDetail product={product} />
        </>
    )
}

export default MainProduct;
