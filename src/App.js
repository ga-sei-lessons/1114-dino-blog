
import React, { Component } from 'react'
import Post from './Post'

// mock post from our fake backend
const post = {
  title: 'Scientists make a great snack!',
  author: 'Trex from Jurassic park',
  body: 'They are crunchy, delicious and healthy for the dino trying to watch their weight',
  comments: [
    'True!',
    'I love Scientists for breakfast and lunch!',
    'Great Post!',
    'I like anthropologists in particular to eat'
  ]
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the dino blog 🦖</h1>

        <Post 
          title={post.title}
          author={post.author}
          body={post.body}
          comments={post.comments}
        />
      </div>
    )
  }
}

export default App