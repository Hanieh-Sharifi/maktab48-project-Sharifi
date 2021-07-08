import React, { useState } from 'react';

// styles components material ui
import { SunShineButton } from '../../../Utils/styled-components/newColorsMaterial/coloredButton/coloredButtonComponent';
import { LavenderTextField } from '../../../Utils/styled-components/newColorsMaterial/coloredTextfield/coloredTextfieldComponent';

// react router dom
import { Link, useHistory } from 'react-router-dom';

// components style import
import {useStyles} from "./adminLoginStyles";

// fetch user and get token function
import { LoginFetch } from '../../../API/login';

// for react notification, it needs a toastContainer in return
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLoginPage = () => {

    // access to url
    const history = useHistory();

    // add material ui classes
    const classes = useStyles();

    // form states
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [disable, setDisable] = useState({userName:true,password:true});

    // form updating states
    function stateChanges(e)
    {
        e.target.id === "userName-input" ? setUserName(e.target.value) : setPassword(e.target.value);
    }

    // form submitted
    function formSubmitted(e)
    {
        e.preventDefault();
        // fetch user and get token and go to panel page
        LoginFetch(userName, password)
        .then(response => { localStorage.setItem("token", response.data.token); history.push("/admin/panel")})
        .catch(error => {console.log(error);toast.error("admin not found!")})
    }

    return (
        <div className={classes.parent} >
            <div className={classes.formParent}>
                <form onSubmit={(e) => formSubmitted(e)} className={classes.root} noValidate autoComplete="off">
                    <h1>ورود به پنل مدیریت فروشگاه دولوپر</h1>
                    <LavenderTextField value={userName} onChange={(e) => stateChanges(e)} id="userName-input" label="نام کاربری" variant="outlined" />
                    <LavenderTextField value={password} onChange={(e) => stateChanges(e)} type="password" id="password-input" label="رمز عبور" variant="outlined" />
                    <SunShineButton disabled={(userName==="" || password==="") ? true : false} type="submit" > ورود </SunShineButton>
                </form>
                <Link to="/" >بازگشت به سایت</Link>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AdminLoginPage;
