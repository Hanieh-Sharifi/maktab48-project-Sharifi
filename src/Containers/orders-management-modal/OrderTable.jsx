import React from 'react';
import { Link } from 'react-router-dom';

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@material-ui/core";

import {tableStyle} from "./modalStyles";

export default function OrderTable({data}) {

    const classes = tableStyle();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>کالا</TableCell>
                        <TableCell>قیمت</TableCell>
                        <TableCell>تعداد</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((row,index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Link to={`/product/${row.id}`} >
                                    {row.name}
                                </Link>
                            </TableCell>
                            <TableCell>{row.price}</TableCell>
                            <TableCell>{row.total}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
