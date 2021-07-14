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

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0;
  border-color: black;
`;

const AdminLoginPage = () => {

    // access to url
    const history = useHistory();

    // add material ui classes
    const classes = useStyles();

    // form states
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);

    const [loading, setLoading] = useState(false);

    // form updating states
    function stateChanges(e)
    {
        e.target.id === "userName-input" ? setUserName(e.target.value) : setPassword(e.target.value);
    }

    // form submitted
    function formSubmitted(e)
    {
        setLoading(true)
        e.preventDefault();
        // fetch user and get token and go to panel page
        LoginFetch(userName, password)
        .then(response => { localStorage.setItem("token", response.data.token); history.push("/admin/panel"); setLoading(false)})
        .catch(error => {console.log(error);toast.error("!کاربر یافت نشد")})
    }

    return (
        <div className={classes.parent} >
            <div className={classes.formParent}>
                <form onSubmit={(e) => formSubmitted(e)} className={classes.root} noValidate autoComplete="off">
                    <h2>ورود به پنل مدیریت فروشگاه دولوپر</h2>
                    <LavenderTextField value={userName} onChange={(e) => stateChanges(e)} id="userName-input" label="نام کاربری" variant="outlined" />
                    {userName === "" && <p className={classes.error}>لطفا فیلد را پر کنید</p>}
                    <LavenderTextField value={password} onChange={(e) => stateChanges(e)} type="password" id="password-input" label="رمز عبور" variant="outlined" />
                    {password === "" && <p className={classes.error}>لطفا فیلد را پر کنید</p>}
                    <SunShineButton disabled={((userName === "" || password === "") || (userName === null || password === null)) ? true : false} type="submit" > ورود
                        <ClipLoader loading={loading} css={override} size={30}/>
                    </SunShineButton>
                </form>
                <Link to="/" ><p>بازگشت به سایت</p></Link>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AdminLoginPage;

// accepted admin username and password:
//eve.holt@reqres.in : username
//cityslicka : password