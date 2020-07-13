import React, { Component, PropTypes } from 'react'
import {Modal, Button} from 'react-bootstrap'
import Checkbox from './Checkbox';
import data from "../../Data/menu.json";
import CheckboxContainer from './CheckboxContainer';

export class OptionsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  
  }
  render () {
    const { label } = this.props;
    const { isChecked } = this.state;
    return (
      <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Elegir <b>tipo de hamburguesa</b> y/o <b>extras</b>:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      {/* <div className="container">
        <CheckboxContainer />
      </div> */}

      </Modal.Body>
      <Modal.Footer>
        <Button variant = 'danger' onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
  }
}
