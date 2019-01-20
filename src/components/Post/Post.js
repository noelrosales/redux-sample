import React from 'react'
import './Post.css'
import { connect } from 'react-redux';
import { deletePost } from '../../store/actions/postActions';

class Post extends React.Component{

  state = {
    status: 'pending'
  }

  handleDelete = () => {
    const { post } = this.props;
    const id = post.id;
    this.refs.post.classList="post removed";
    setTimeout(() => this.props.deletePost(id), 400)
  }

  render(){
    const { post } = this.props;
    return (
      <div ref="post" className="post" onClick={this.handleDelete}>
        <p>{post.content}</p>
      </div>
    )
  }
}

export default connect(null, {deletePost})(Post)
