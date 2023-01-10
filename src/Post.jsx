import React, { Component } from 'react'
import Comment from './Comment'

// exoprt on the same line as the class definition
export default class Post extends Component {
    render() {
        // map the array of comment data to an array of jsx components
        const commentComponents = this.props.comments.map((comment, idx) => {
            return (
                <Comment 
                    content={comment} 
                    // 'key' prop helps react keep track of this component in the virtual dom, it is like a primary key in SQL
                    key={`comment-${idx}`}
                />
            )
        })

        // just for testing
        console.log(this)
        return (
            <div>
                <h2>{this.props.title}</h2>

                <p>by: {this.props.author}</p>

                <p>{this.props.body}</p>

                <h3>Comments from the Dino Community:</h3>

                {commentComponents}
            </div>
        )
    }
}