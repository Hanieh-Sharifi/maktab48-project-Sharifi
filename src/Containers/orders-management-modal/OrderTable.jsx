import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {tableStyle} from "./modalStyles";
import { Link } from 'react-router-dom';

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
