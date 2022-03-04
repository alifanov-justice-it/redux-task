import React from "react";
import {connect} from 'react-redux'
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

type Props = { //обозначаем типы пропсов
    createPost: typeof createPost,
    fetchPosts: typeof fetchPosts,

    showLoader: typeof showLoader,
    hideLoader: typeof hideLoader,
    post?: string,
    posts?: any[],
    app?: any,
    loading?: boolean
}
interface State {
    loading: boolean
    post: string
}

class Component1 extends React.Component <Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            post: '',
            loading: false
        }
    }
    componentDidMount() {
        this.props.fetchPosts()
    }

    // submitHandler = (event: any) => {
    //     event.preventDefault()
    //     const {post}:any = this.state
    //     const newPost = {
    //         post
    //     }
    //     this.props.createPost(newPost.post)
    //     this.setState({post: ''})
    // }
    //
    // changeInputHandler = (event: any) => {
    //     this.setState(state => ({ post: event.target.value }))
    // }

    render() {
        if (!this.props.app.loading) {
            return(
                <div>
                    {/*<form onSubmit={this.submitHandler}>*/}
                    {/*    <div className="">*/}
                    {/*        <label htmlFor="title">Заголовок поста</label>*/}
                    {/*        <input*/}
                    {/*            type="text"*/}
                    {/*            className=""*/}
                    {/*            id="title"*/}
                    {/*            value={this.state.post}*/}
                    {/*            name="title"*/}
                    {/*            onChange={this.changeInputHandler}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <button className="btn btn-success" type="submit">Создать</button>*/}
                    {/*</form>*/}
                    <div>
                        <BasicTable data={this.props.posts}/>
                    </div>
                </div>
            )
        }
        else {
            return(
            <div>
                <CircularIndeterminate />
            </div>
            )
        }
    }
}

const mapDispatchToProps = {
    createPost, fetchPosts, showLoader, hideLoader
}

const mapStateToProps = (state: any) => ({ //стейт редакса
    posts: state.posts,
    app: state.app
});

export default connect(mapStateToProps, mapDispatchToProps)(Component1)