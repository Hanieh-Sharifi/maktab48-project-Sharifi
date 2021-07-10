import MatEdit from './MatEdit';
import MatDelete from "./MatDelete";

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
        field: "image",
        headerName: 'تصویر کالا',
        sortable: false,
        renderCell: (params) => {
            return (
                <div style={{ cursor: "pointer", objectFit: "cover" }}>
                    <img alt="product" src={params.row.image} style={{ height: "50px" }} />
                </div>
            );
        },
        flex: 1,
        filterable: false,
        width: 200,
    },
    {
        field: 'productName',
        headerName: 'نام کالا',
        sortable: false,
        flex: 1,
        filterable: false,
        width: 200,
    },
    {
        field: 'category',
        headerName: 'دسته بندی',
        sortable: true,
        flex: 1,
        width: 200,
    },
    {
        field: "actions",
        headerName: "  ",
        sortable: false,
        disableClickEventBubbling: true,
        renderCell: (params) => {
            return (
                <div style={{ cursor: "pointer" }}>
                    <MatEdit index={params.row.id} data={params.row} />
                    <MatDelete index={params.row.id} />
                </div>
            );
        },
        flex: .5,
        filterable: false,
        width: 200,
    }
];