import {Button} from "@material-ui/core";

export const columns = [
    {
        field: 'id',
        headerName: 'ردیف',
        sortable: false,
        flex: .5,
        filterable: false,
        width: 200,
    },
    {
        field: "customerName",
        headerName: 'نام کاربر',
        sortable: false,
        flex: 1,
        filterable: false,
        width: 200,
    },
    {
        field: 'orderTime',
        headerName: 'زمان ثبت سفارش',
        sortable: true,
        flex: 1,
        filterable: false,
        width: 200,
    },
    {
        field: 'status',
        headerName: "  ",
        sortable: false,
        flex: 1,
        width: 200,
        filterable:false,
        renderCell: () => {
            return (
                <Button fullWidth className="table-last-col">بررسی سفارش</Button>
            );
        },
    }
];