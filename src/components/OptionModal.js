import React from "react";
import Modal from "react-modal";

Modal.setAppElement('#text');
const OptionModal =(props)=>
    (
       <Modal className="modal" isOpen={!!props.selectedOption}
              contentLabel ="selected option"
              onRequestClose={props.handleOptionModal} >
            <h3> Selected Option</h3>
            <h4>{props.selectedOption}</h4>
            <button className="modal__btn" onClick={props.handleOptionModal}>Okay</button>      
        </Modal>
   )
    



export default OptionModal