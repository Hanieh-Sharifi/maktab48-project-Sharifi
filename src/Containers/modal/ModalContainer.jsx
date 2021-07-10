import React,{useState} from 'react';
import { useSelector } from 'react-redux';

// material ui components
import { TextField, FormControl, InputLabel, Select, Input } from "@material-ui/core";
import { SunShineButton } from '../../Utils/styled-components/newColorsMaterial/coloredButton/coloredButtonComponent';

// material ui styles
import {modalContainerStyles} from "./modalStyles";

// change image to base64
import { convertBase64} from "./base64";

// for fetching data
import axios from 'axios';

const categories = ["لبنیات","حبوبات","نوشیدنی","خوار و بار","محصولات پروتئینی"]

function ModalContainer() {

    const classes = modalContainerStyles();
    const editRow = useSelector(state => state.todo);

    const [image, setImage] = useState(editRow[0]?.image);
    const [productName, setProductName] = useState(editRow[0]?.productName);
    const [category, setCategory] = useState(editRow[0]?.category);
    const [explanation, setExplanation] = useState(editRow[0]?.explanation);



    function handleSubmit()
    {
        axios.post("http://localhost:5000/products",{
            image: image,
            productName: productName,
            category: category,
            explanation:explanation
        })
    }

    const handleFileRead = async (event) => {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        setImage(base64)
    }


    return (
        <div>
            <form onSubmit={() => handleSubmit()} className={classes.root}  noValidate autoComplete="off">
                <InputLabel htmlFor="my-input">تصویر کالا</InputLabel>
                <Input onChange={e => handleFileRead(e)} required type="file" />
                {image && <img src={image} style={{width:"70px",height:"70px",objectFit:"cover"}} />}
                <TextField required value={productName} onChange={(e) => setProductName(e.target.value)} fullWidth id="outlined-basic" label="نام کالا" variant="outlined" />
                <FormControl fullWidth variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="filled-age-native-simple">دسته بندی</InputLabel>
                    <Select
                        required
                        native
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option aria-label="None" value="" />
                        {categories?.map((item,index) => {
                            return <option key={index} value={item}>{item}</option>
                        })}
                    </Select>
                </FormControl>
                <TextField required value={explanation} onChange={(e) => setExplanation(e.target.value)} fullWidth id="outlined-multiline-static" label="توضیحات" multiline rows={4} variant="outlined" />
                <SunShineButton disabled={(image && productName && category && explanation)?false:true} className={classes.button} fullWidth type="submit" variant="contained">ذخیره</SunShineButton>
            </form>
        </div>
    )
}

export default ModalContainer;
