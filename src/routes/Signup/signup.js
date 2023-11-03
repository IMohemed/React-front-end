import React from "react";
import './signup.css';
import { Grid,Avatar } from "@mui/joy";
import { Paper,TextField,Button,FormControlLabel,Checkbox, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {Formik,ErrorMessage} from 'formik';
import { Field } from "formik";
import { Form } from "formik";
import * as Yup from 'yup';
function Signup  () {
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
                    <h2>Sign up</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onsubmit} validationSchema={validateSchema}>
                    {(props) => (
                        <Form>
                            <Grid sx={{marginTop:.8+"vh"}} container spacing={2} textAlign="center">
                                <Grid item xs={12} sm={6}>
                                    <TextField  required label="First Name"/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required label="Last Name"/>
                                </Grid>
                            </Grid>
                            {/* {console.log(props)}  */}
                            <Field as={TextField} sx={{marginTop:.5+"vh"}} name="username" label="Email" placeholder="Enter username"  fullWidth required helperText={<ErrorMessage name="username" />}/>
                            
                            <Field as={TextField} label="Password" name="password" placeholder="Enter Password"  type="password" fullWidth required helperText={<ErrorMessage name="password" />}/>
                            <Field as={TextField} label="Confirm Password" name="confirm password" placeholder="Enter Password"  type="password" fullWidth required helperText={<ErrorMessage name="password" />}/>
                            <Field as={FormControlLabel} name="remember" control={<Checkbox  />} label="I accept the terms and conditions" />
                            <Button type="submit" style={button} color="primary" variant="contained" fullWidth disabled={props.isSubmitting}>{props.isSubmitting?"Loading":"Sign up"}</Button>
                        </Form> 
                        )}
                </Formik> 
                {/* <Typography paddingTop=".5vh" ><Link  to="/forgotPassword"> Forgot Password?</Link></Typography>
                <Typography paddingTop=".5vh" >Dont you Have An Account?<Link  to="/signup"> Sign up</Link></Typography> */}
            </Paper>
        </Grid>
        </>
    )
}

export default Signup;