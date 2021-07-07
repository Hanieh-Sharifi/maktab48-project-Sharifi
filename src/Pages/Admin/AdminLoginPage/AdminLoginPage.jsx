import React, { useState } from 'react';

// styles components material ui
import { SunShineButton } from '../../../Utils/styled-components/newColorsMaterial/coloredButton/coloredButtonComponent';
import { LavenderTextField } from '../../../Utils/styled-components/newColorsMaterial/coloredTextfield/coloredTextfieldComponent';

// react router dom
import { Link, useHistory } from 'react-router-dom';

// components style import
import {useStyles} from "./adminLoginStyles";


const AdminLoginPage = () => {

    // access to url
    const history = useHistory();

    // add material ui classes
    const classes = useStyles();

    // form states
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // form updating states
    function stateChanges(e)
    {
        e.target.id === "userName-input" ? setUserName(e.target.value) : setPassword(e.target.value);
    }

    // form submitted and we'll create token
    function formSubmitted(e)
    {
        e.preventDefault();
        localStorage.setItem("token","fake token");
        history.push("/admin/panel");
        console.log("form submitted");
    }

    return (
        <div className={classes.parent} >
            <div className={classes.formParent}>
                <form onSubmit={(e) => formSubmitted(e)} className={classes.root} noValidate autoComplete="off">
                    <h1>ورود به پنل مدیریت فروشگاه دولوپر</h1>
                    <LavenderTextField value={userName} onChange={(e) => stateChanges(e)} id="userName-input" label="نام کاربری" variant="outlined" />
                    <LavenderTextField value={password} onChange={(e) => stateChanges(e)} type="password" id="password-input" label="رمز عبور" variant="outlined" />
                    <SunShineButton type="submit" > ورود </SunShineButton>
                </form>
                <Link to="/" >بازگشت به سایت</Link>
            </div>
        </div>
    )
}

export default AdminLoginPage;
