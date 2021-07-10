import React,{useState} from 'react';
import { useSelector } from 'react-redux';

// material ui components
import { TextField, FormControl, InputLabel, Select, Input } from "@material-ui/core";
import { SunShineButton } from '../../Utils/styled-components/newColorsMaterial/coloredButton/coloredButtonComponent';

// material ui styles
import {modalContainerStyles} from "./modalStyles";

// change image to base64
import { convertBase64} from "./base64";

// rich text editor component
import TextEditor from './TextEditor';

// fetch data
import { putData, postData } from '../../API/productApi';



const categories = ["لبنیات","حبوبات","نوشیدنی","خوار و بار","محصولات پروتئینی"];


function ModalContainer() {

    const classes = modalContainerStyles();
    const editRow = useSelector(state => state.todo);

    const [image, setImage] = useState(editRow[0]?.image);
    const [productName, setProductName] = useState(editRow[0]?.productName);
    const [category, setCategory] = useState(editRow[0]?.category);
    const [explanation, setExplanation] = useState(editRow[0]?.explanation);


    function handleSubmit(e)
    {
        editRow[0] ? putData(editRow[0].id, image, productName, category, explanation) : postData(image, productName, category, explanation)
    }

    const handleFileRead = async (event) => {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        setImage(base64)
    }

    const handleExplanation = (state) => {
        const data = state.getCurrentContent().getPlainText();
        setExplanation(data);
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} className={classes.root}  noValidate autoComplete="off">
                <InputLabel htmlFor="my-input">تصویر کالا</InputLabel>
                <Input onChange={e => handleFileRead(e)} required type="file" accept="image/*" />
                {image && <img src={image} alt="uploaded" style={{width:"70px",height:"70px",objectFit:"cover"}} />}
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
                <TextEditor handleExplanation={(state) => handleExplanation(state)} explanation={explanation} />
                <SunShineButton disabled={(image && productName && category && explanation)?false:true} className={classes.button} fullWidth type="submit" variant="contained">ذخیره</SunShineButton>
            </form>
        </div>
    )
}

export default ModalContainer;
