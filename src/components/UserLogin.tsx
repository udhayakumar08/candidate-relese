import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';
import Store from '../store/store';
import { login, otpVerification } from '../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    paper: {
        width: 'auto',
        variant: "outlined",
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
}));




export default function SignIn() {



    const classes = useStyles();
    const dispatch = useDispatch();
const history=useHistory()
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState("")
    const [OTP, setOTP] = useState("")

    const userReducer = useSelector((state: any) => state.userReducer)

    const handleClickOpen = () => {

        
        dispatch(login(email));
        setTimeout(() => {
            setOpen(true);
          }, 3000);
       


    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleOTP = (event: any) => {
        setOTP(event.target.value)
    }

    const submitOTP = () => {
        dispatch(otpVerification(OTP, email))
        setOpen(false);

        history.push('/')
    }


    //my logics

    const handleEmail = (event: any) => {
        setEmail(event.target.value)
    }


    return (
        <div className={classes.layout} >

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={handleEmail}
                            autoFocus

                        />

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleClickOpen}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="#" >
                                    Forgot email?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link  to='/user/register'>

                                {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>



                        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title" color="secondary.main">OTP verification</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    To login to this website, please enter your OTP here. We already send OTP
                                    to your resgistered Email id.
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="6 digit OTP"
                                   
                                    onChange={handleOTP}
                                    fullWidth
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={submitOTP} color="primary">
                                    Submit
                                </Button>
                            </DialogActions>
                        </Dialog>




                    </form>
                </div>
            </Container>
        </div>

    );
}