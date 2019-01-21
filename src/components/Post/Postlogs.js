import React from 'react'
import './Post.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const PostList = (props) => {
  const {logs} = props
  
  return (
    <div className="posts-logs">
        <h1>Logs</h1>
        <ul>
            {logs && logs.map((log, i) => {
                return <li key={i}> 
                          <span className={"stamp "+log.action}>{log.created}</span> 
                          <span className="post-log">{log.action}: '<i>{log.content}</i>'</span> 
                       </li>
            })}
        </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    logs: state.posts.logs
  }
}

export default withRouter(connect(mapStateToProps)(PostList))
