import React from 'react'
import './Post.css'
import { connect } from 'react-redux';
import { deletePost, updatePost } from '../../store/actions/postActions';

class Post extends React.Component{

  handleDelete = () => {
    const { post } = this.props;
    const id = post.id;
    this.refs.post.classList="post removed";
    setTimeout(() => this.props.deletePost(id), 400)
  }

  handleUpdate = () => {
    const { post } = this.props;
    this.refs.post.classList="post read";
    this.props.updatePost(post)
  }

  render(){
    const { post } = this.props;
    return (
      <div 
        ref="post" 
        className={"post " + post.status} 
      >
        <div className="post-overlay">
          <div className="update" onClick={this.handleUpdate}><button>Marked as Done</button></div>
          <div className="remove" onClick={this.handleDelete}><button>Remove this Post</button></div>
        </div>
        <p>{post.content}</p>
      </div>
    )
  }
}

export default connect(null, {deletePost, updatePost})(Post)
