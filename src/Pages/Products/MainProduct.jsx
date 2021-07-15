import React from 'react';
import {Container} from "@material-ui/core";
import { useParams } from 'react-router-dom';

function MainProduct() {

    const {id} = useParams();

    return (
        <div>
            <Container variant="h1" >
                product id : {id}
            </Container>
        </div>
    )
}

export default MainProduct;
