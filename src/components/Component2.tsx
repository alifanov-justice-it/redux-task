import React, {useState, useEffect} from "react";
import {connect, useSelector, useDispatch} from 'react-redux'
import {createPost, fetchPosts, hideLoader, showLoader} from '../app/action'
import BasicTable from './Table'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function CircularIndeterminate() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    );
}

export default function Component2() {
    const dispatch = useDispatch();

    const app:any = useSelector(((state:any) => state))
    console.log(app)

    const posts:any = useSelector(((state:any) => state.posts))

    useEffect(() => {
        dispatch(fetchPosts())
        }, []
    )

    if(app.loading) {
        return (
            <CircularIndeterminate />
        )
    }
    return(
        <div>
            <div>
                <BasicTable data={posts}/>
            </div>
        </div>
    )
}