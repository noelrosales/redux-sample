import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../../store/actions/postActions';
import uuid from 'uuid';
import moment from 'moment';
import Postlogs from './Postlogs';
import Modal from '../Modal/Modal';

class CreatePost extends Component {
   state = {
       id: uuid(),
       content: '',
       created: moment().format(),
       status: 'new'
   }

   handleChange = (e) => {
       this.setState({
           [e.target.name]: e.target.value
       })
   }

   handleSubmit = (e) => {
       e.preventDefault()
       this.setState({
           id: uuid(),
           created: moment().format()
       })
       this.props.addPost(this.state)
       this.setState({
            content: ''
        })
   }
   render() {
     return (
       <div className="create-post">
         <form onSubmit={this.handleSubmit}>
             <input type='text' name='content' onChange={this.handleChange} value={this.state.content}/>
             <button type='submit'>Create Post</button>
         </form>
         <Postlogs />
       </div>
     );
   }
 }
 
 export default connect(null, {addPost})(CreatePost);
