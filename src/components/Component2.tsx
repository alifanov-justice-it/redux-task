import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import {fetchPosts} from '../app/action'
import BasicTable from './Table'
import DataTable from './Table2'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


interface IState {
    app: {
        loading : boolean
    }
    posts: {
        posts: IPosts[] | []
    }
}

export interface IPosts {
    abv: number,
    attenuation_level: number,
    boil_volume: {
        unit: string,
        value: number
    },
    brewers_tips: string,
    contributed_by: string,
    description: string,
    ebc: number,
    first_brewed: string,
    food_pairing: [
        string
    ],
    ibu: number,
    id: number,
    image_url: string,
    ingredients: {
        hops: [
            {
                add: string,
                amount: {
                    unit: string,
                    value: number
                },
                attribute: string,
                name: string
            }
        ],
        malt: [
            {
                amount: {
                    unit: string,
                    value: number
                },
                name: string
            }
        ],
        yeast: string,
    },
    method:{
        fermentation: {
            temp: {
                unit: string,
                value: number
            }
        }
        mash_temp: [
            {
                duration: number,
                temp: {
                    unit: string,
                    value: number
                }
            }
        ],
        twist: null
    },
    name: string,
    ph: number,
    srm: number,
    tagline: string,
    target_fg: number,
    target_og: number,
    volume: {
        unit: string,
        value: 20
    }
}



function CircularIndeterminate() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    );
}

export default function Component2() {
    const dispatch = useDispatch();

    const posts = useSelector(((state: IState) => state.posts.posts))

    const app = useSelector(((state: IState) => state.app))

    useEffect(() => {
        dispatch(fetchPosts())
        }, []
    )

    if(app.loading === true) {
        return (
            <CircularIndeterminate />
        )
    }
    else{
        return(
            <div>
                <div>
                    {/*<BasicTable data={posts}/>*/}
                    <DataTable posts={posts}/>
                </div>
            </div>
        )
    }

}