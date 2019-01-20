import React, { Component } from 'react'
import './Modal.css';


export default class Modal extends Component {

  state={
    isOpened: true
  }

  closeModal = () => {
    this.setState({
      isOpened: false
    })
  }

  componentDidMount(){
    console.log(this.refs.modal)
  }

  render() {
    return (
      <div ref="modal" className={this.state.isOpened ? "modal" : "modal close"}>
        <div className="modal-content">
          <h1>Hello Muthfuckaz</h1>
          <span className="close-button" onClick={this.closeModal}>close</span>
        </div>
      </div>
    )
  }
}

