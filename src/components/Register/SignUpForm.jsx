// eslint-disable-next-line no-unused-vars
import React , {useEffect, useState} from "react";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
//import { render } from "react-dom";

const SignUpForm = () => {
    
    const [formValues , setFormValues]= useState({
        check : false,
        name : "",
        username : "",
        mail : "",
        mobile : "",
    });

    
    

    const [nameError , setNameError]= useState(false);
    const [userNameError , setUserNameError]= useState(false);
    const [mailError , setMailError]= useState(false);
    const [mobileError , setMobileError]= useState(false);
    const [signUpError , setSignUpError]= useState(false);

    const navigate=useNavigate();
    

    const handleChange = (e)=>{
        setFormValues({...formValues , [e.target.name]: e.target.value});
    };

    const handleSubmit =(e)=>{
        e.preventDefault();

        let valid = true;
        if(!(formValues.name.trim().length > 0)){
            setNameError(true);
            valid = false;
        }else{
            setNameError(false);
        }
        if(!(formValues.username.trim().length > 0)){
            setUserNameError(true);
            valid = false;
        }else{
            setUserNameError(false);
        }
        if(!(formValues.mail.trim().length > 0)){
            setMailError(true);
            valid = false;
        }else{
            setMailError(false);
        }
        if(!(formValues.mobile.trim().length > 0)){
            setMobileError(true);
            valid = false;
        }else{
            setMobileError(false);
        }
        if(!(formValues.check)){
            setSignUpError(true);
            valid = false;
        }else{
            setSignUpError(false);
        }

        if(valid){
            // eslint-disable-next-line react-hooks/rules-of-hooks
            //const formvaluelist=JSON.parse(localStorage.getItem('userData') || "[]");
            //formvaluelist.push(formValues);
            window.localStorage.setItem("userData" , JSON.stringify(formValues));
           //localStorage.setItem("userData" , JSON.stringify(formValues))
            navigate("/genre");
        }
    };
    return(
        <div className={styles.body}>
            <p className={styles.super}>Super App</p>
            <p>Create a new Account</p>
            <p>
                Email<span style={{color:"green"}}>&nbsp;|&nbsp;</span>Google
            </p>
            <form>
            <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="name"
                placeholder="Name"
            />
            {nameError ? (
                <p className={styles.error}>Please fill correctly</p> ): (<></>)
            }
            <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="username"
                placeholder="UserName"
            />
            {userNameError ? (
                <p className={styles.error}>Please fill correctly</p> ): (<></>)
            }
            <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="mail"
                placeholder="Mail"
            />
            {mailError ? (
                <p className={styles.error}>Please fill correctly</p> ): (<></>)
            }
            <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="mobile"
                placeholder="Mobile"
            />
            {mobileError ? (
                <p className={styles.error}>Please fill correctly</p> ): (<></>)
            }
            <label>
                <input
                    onChange={(e) =>
                    setFormValues({
                        ...formValues,[e.target.name] : e.target.checked,})
                    }
                    type="checkbox"
                    name="check"
                    style={{boxShadow:"none"}}
                /> <p>Share my details with super app</p>
            </label>
            { signUpError ? <p className={styles.error}>Please this tick this box</p>: <></>}
            <br></br>
            <button type="submit" onClick={(e) => handleSubmit(e)}>
                SIGN UP
            </button>
            </form>
        </div>
    )

}

export default SignUpForm;