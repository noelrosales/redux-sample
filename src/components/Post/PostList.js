import React from 'react'
import Post from './Post';
import './Post.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const PostList = (props) => {
  const {posts} = props

  return (
    <div className="posts-list">
        {posts && posts.map( post => <Post key={post.id} post={post}/>)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.data
  }
}

export default withRouter(connect(mapStateToProps)(PostList))
