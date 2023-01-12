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
    // reference the input values in state, and create a new post using them
    console.log(this.state)
    this.setState(prevState => {
      const newPost = {
        title: prevState.title,
        body: prevState.body,
        author: prevState.author,
        comments: []
      }

      return {
        // ... spread operator 'spreads' the old array into a new one, that also has the newPost in it
        // posts: [...prevState.posts, newPost]
        posts: prevState.posts.concat(newPost)
      }
    })


  }

  handleInputChange = e => {
    console.log(e.target.id) // onChange synthetic event
    // update state to reflect the typed key
    this.setState({
      // [] are how you supply a js varaible as a key in an object literal
      [e.target.id]: e.target.value
    })
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
          <label htmlFor='title'>Title:</label>
          <input 
            type='text'
            id='title'
            // have an event handler where the state changes when the user clicks a key
            onChange={this.handleInputChange} // this is when a user clicks a key
            // have the value of this input reflect the title value in state
            value={this.state.title} // displayed to the user
          />

          <label htmlFor='author'>Author:</label>
          <input 
            type='text'
            id='author'
            onChange={this.handleInputChange}
            value={this.state.author}
          />

          <label htmlFor='body'>Body:</label>
          <input 
            type='text'
            id='body'
            onChange={this.handleInputChange}
            value={this.state.body}
          />


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