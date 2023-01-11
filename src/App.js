import React, { Component } from 'react'
import Post from './Post'

// mock post from our fake backend
// const post = {
//   title: 'Scientists make a great snack!',
//   author: 'Trex from Jurassic park',
//   body: 'They are crunchy, delicious and healthy for the dino trying to watch their weight',
//   comments: [
//     'True!',
//     'I love Scientists for breakfast and lunch!',
//     'Great Post!',
//     'I like anthropologists in particular to eat'
//   ]
// }

// starter array of posts
const starterPosts = [
  {    
    title: 'Scientists make a great snack!',
    author: 'Trex from Jurassic park',
    body: 'They are crunchy, delicious and healthy for the dino trying to watch their weight',
    comments: [
      'True!',
      'I love Scientists for breakfast and lunch!',
      'Great Post!',
      'I like anthropologists in particular to eat'
    ]
  },
  {
    title: 'Dinosaurs are neat',
    author: 'Mr. T-Rex',
    body: 'I pity the fool that doesn\'t think dinosaurs are neat!',
    comments: [
      'Wow!',
      'Amazing!',
      '🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥'
    ]
  }
]

class App extends Component {
  // state definitions
  state = {
    // posts to render
    posts: starterPosts,
    // what the user has typed in the form
    title: '',
    author: '',
    body: ''
  }

  // event handlers
  // handleBodyChange = () => {
  //   // show the user a prompt that lets them change the body
  //   // console.log('change the body!')
  //   const userInput = prompt('what should the new body be, user?')
  //   // console.log(userInput)
  //   this.setState({
  //     body: userInput
  //   })
  // }

  handleFormSubmit = e => {
    e.preventDefault()
    console.log(e) // form submission synthetic event
  }

  render() {
    const postComponents = this.state.posts.map((post, i) => {
      return (
        <Post 
          title={post.title}
          author={post.author}
          body={post.body}
          comments={post.comments}
          key={`post${i}`}
        />
      )
    })

    return (
      <div>
        <h1>Welcome to the dino blog 🦖</h1>

        <form onSubmit={this.handleFormSubmit}>

          <button type='submit'>Create New Post</button>
        </form>

        {postComponents}        

        {/* code graveyard */}

        {/* <Post 
          title={this.state.title}
          author={this.state.author}
          body={this.state.body}
          comments={this.state.comments}
        />

        <button onClick={this.handleBodyChange}>Edit Body</button> */}
      </div>
    )
  }
}

export default App