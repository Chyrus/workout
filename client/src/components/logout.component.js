import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Typography from '@material-ui/core/Typography';

export default function Logout( {updateUser, getUser }) {

    useEffect(() => {
        axios.post('/user/logout').then(response => {
            console.log('Get user response: ')
            console.log(response.data)
            if (response.data.user) {
            console.log('Get User: There is a user saved in the server session: ')
            updateUser(true, response.data.user.username);
            } else {
            console.log('Get user: no user');
            updateUser(false, null);
            }
        })
    });
  
    return (
        
        <Redirect to={{ pathname: '/login' }} />

    );
  }