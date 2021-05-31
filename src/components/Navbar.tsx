


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../actions/dist/userAction';

const useStyles = makeStyles((theme:any) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const state = useSelector((isLogin:any) => isLogin.userReducer)

  const dispatch=useDispatch();
  //const state=true


  const SignOut=()=>{
    dispatch(signOut())

  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}  >
            <Button style={{ fontSize: "23px"}}    component={NavLink } to={'/'}>OTT</Button>
            
          </Typography>
          
         
          {state.isLogin ? null : <Button component={NavLink} to={'/userLogin'}>Login</Button>}
          
          {state.isLogin ? null : <Button component={NavLink} to={'/user/register'}>Register</Button>}
          {/* {state ? <Button component={NavLink} to={'/userLogin'}></Button> : null} */}
          {state.isLogin ? <Button component={NavLink} to={'/'} onClick={SignOut}>Sign out</Button> : null}
         {state.isLogin? <Avatar src="/broken-image.jpg" />:null}

        </Toolbar>
      </AppBar>
    </div>
  );
}
