import React from "react";
import {connect} from 'react-redux'
import {createPost} from '../app/action'

type Props = { //обозначаем типы пропсов
    createPost: typeof createPost,
    post?: string
}

interface State {
    post: string
}

class Component1 extends React.Component <Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            post: ''
        }
    }
    submitHandler = (event: any) => {
        event.preventDefault()
        const {post}:any = this.state
        const newPost = {
            post
        }
        console.log(newPost)
        this.props.createPost(newPost.post)
        this.setState({post: ''})
    }

    changeInputHandler = (event: any) => {
        this.setState(state => ({ post: event.target.value }))
    }

    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <div className="">
                    <label htmlFor="title">Зоголовок поста</label>
                    <input
                        type="text"
                        className=""
                        id="title"
                        value={this.state.post}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost
}

// const mapStateToProps = (state: props) => ({ //стейт редакса
//     posts: state.createPost
// });

//null - это mapStateToProps

export default connect(null, mapDispatchToProps)(Component1)