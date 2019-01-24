import React from 'react'
import Post from './Post';
import './Post.css';
import { connect } from 'react-redux';

const PostList = ({posts}) => {

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

export default connect(mapStateToProps)(PostList)
