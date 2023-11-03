import React from "react";
import './login.css';
import { Grid,Avatar } from "@mui/joy";
import { Paper,TextField,Button,FormControlLabel,Checkbox, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {Formik,ErrorMessage} from 'formik';
import { Field } from "formik";
import { Form } from "formik";
import * as Yup from 'yup';
function Login  () {
    const paperStyle = {padding:20,height:"70vh",width:350,margin:"15vh auto"}
    const button = {margin:"8px 0"}
    const initialValues = {
        username:'',
        password:'',
        remember:false
    }
    const validateSchema = Yup.object().shape({
        username:Yup.string().email('please enter valid email').required("Required"),
        password:Yup.string().required("Required")
    })
    const onsubmit = (values,props) => {
        console.log(props)
        setTimeout(() =>{
            props.resetForm()
            props.setSubmitting(false)
        },2000)
    }
    return(
        <>
         <Grid>
            <Paper elevation={10}  style={paperStyle}>
                <Grid textAlign="center">
                    <h2>Sign in</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onsubmit} validationSchema={validateSchema}>
                    {(props) => (
                        <Form>
                            {/* {console.log(props)}  */}
                            <Field as={TextField} sx={{marginTop:.5+"vh"}} name="username" label="username" placeholder="Enter username" variant="standard" fullWidth required helperText={<ErrorMessage name="username" />}/>
                            
                            <Field as={TextField} label="password" name="password" placeholder="Enter Password" variant="standard" type="password" fullWidth required helperText={<ErrorMessage name="password" />}/>
                            <Field as={FormControlLabel} name="remember" control={<Checkbox  />} label="Remember me" />
                            <Button type="submit" style={button} color="primary" variant="contained" fullWidth disabled={props.isSubmitting}>{props.isSubmitting?"Loading":"Sign In"}</Button>
                        </Form> 
                        )}
                </Formik> 
                <Typography paddingTop=".5vh" ><Link  to="/forgotPassword"> Forgot Password?</Link></Typography>
                <Typography paddingTop=".5vh" >Dont you Have An Account?<Link  to="/signup"> Sign up</Link></Typography>
            </Paper>
        </Grid>
        </>
    )
}

export default Login;