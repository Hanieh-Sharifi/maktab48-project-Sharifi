
export const columns = [
    {
        field: "productName",
        headerName: 'نام کالا',
        sortable: false,
        flex: .75,
        filterable: false,
        width: 200,
    },
    {
        field: 'price',
        headerName: 'قیمت',
        sortable: false,
        flex: .5,
        filterable: false,
        width: 100,
        editable: true
    },
    {
        field: 'inventory',
        headerName: 'موجودی',
        sortable: false,
        flex: .5,
        filterable: false,
        width: 100,
        editable: true
    }
];