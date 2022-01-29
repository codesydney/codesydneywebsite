import React, { Component } from "react";
import ModalVideo from 'react-modal-video'
import { FaPlay } from "react-icons/fa";

class  VideoButton extends Component {
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <div className={`video-popup-button ${this.props.ButtonStyle}`}>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                <button className="video-popup" onClick={this.openModal}><FaPlay /><span>Intro & demo video</span></button>
            </div>
        )
    }
}

export default VideoButton;