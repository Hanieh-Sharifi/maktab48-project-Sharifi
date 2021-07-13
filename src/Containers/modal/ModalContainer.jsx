import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material ui components
import { TextField, FormControl, InputLabel, Select, Input, Button } from "@material-ui/core";
import { SunShineButton } from '../../Utils/styled-components/newColorsMaterial/coloredButton/coloredButtonComponent';

// material ui styles
import {modalContainerStyles} from "./modalStyles";

// change image to base64
import { convertBase64} from "./base64";

// rich text editor component
import TextEditor from './TextEditor';

// fetch data
import { addProductApi, editProductApi } from '../../Store/actions/selectedProductActions';



const categories = ["لبنیات","حبوبات","نوشیدنی","خوار و بار","محصولات پروتئینی"];


function ModalContainer({handleClose}) {

    const classes = modalContainerStyles();

    // get selected row information with redux
    const editRow = useSelector(state => state.products.editedRow);

    // the whole information we have to handle in this page
    const [image, setImage] = useState(editRow.image ? editRow.image : null);
    const [productName, setProductName] = useState(editRow.productName ? editRow.productName : null);
    const [category, setCategory] = useState(editRow.category ? editRow.category : null );
    const [explanation, setExplanation] = useState(editRow.explanation ? editRow.explanation : null);

    const dispatch = useDispatch();

    // when we submit the form in the modal, modal must close and the data must fetch, edit or add a product
    function handleSubmit(e)
    {
        e.preventDefault();
        handleClose();

        // if we dont have editRow.id means we are making a new component, so we can set put or post with this
        editRow.id ? dispatch(editProductApi(editRow.id, image, productName, category, explanation)) : dispatch(addProductApi(image, productName, category, explanation)) ;
    }

    const handleFileRead = async (event) => {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        setImage(base64)
    }

    const handleExplanation = (state) => {
            setExplanation(state.getCurrentContent().getPlainText());
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} className={classes.root}  noValidate autoComplete="off">
                <InputLabel htmlFor="my-input">تصویر کالا</InputLabel>
                <input accept="image/*" onChange={e => handleFileRead(e)} placeholder="image" required type="file" accept="image/*" />
                {image && <div className={classes.imagePranet} >
                    <Button onClick={() => setImage("")} >x</Button>
                    <img src={image} alt="uploaded"/>
                </div>}
                {image==="" && <p className={classes.error} >لطفا فیلد را پر کنید</p>}
                <TextField required value={productName} onChange={(e) => setProductName(e.target.value)} fullWidth id="outlined-basic" label="نام کالا" variant="outlined" />
                {productName==="" && <p className={classes.error} >لطفا فیلد را پر کنید</p>}
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
                {category==="" && <p className={classes.error} >لطفا فیلد را پر کنید</p>}
                <TextEditor handleExplanation={(state) => handleExplanation(state)} explanation={explanation} />
                <SunShineButton disabled={(image && productName && category && explanation)?false:true} className={classes.button} fullWidth type="submit" variant="contained">ذخیره</SunShineButton>
            </form>
        </div>
    )
}

export default ModalContainer;
