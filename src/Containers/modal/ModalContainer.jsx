import React,{useState} from 'react';

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

    const [image, setImage]= useState("");
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [explanation, setExplanation] = useState("");


    function handleSubmit(e)
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
            <form onSubmit={(e) => handleSubmit(e)} className={classes.root}  noValidate autoComplete="off">
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
                            return <option key={index} value={index}>{item}</option>
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
