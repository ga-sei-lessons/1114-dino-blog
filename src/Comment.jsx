import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        return (
            <div>
                <p>{this.props.content}</p>
            </div>
        )
    }
}