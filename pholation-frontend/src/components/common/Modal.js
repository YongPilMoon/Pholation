import React, { Component, PropTypes } from 'react';
import Dimmer from './Dimmer';
import EyeCatchy from './EyeCatchy';

class Modal extends Component{

  static propTypes = {
    onHide: PropTypes.func,
    visible: PropTypes.bool,
    className: PropTypes.string
  };

  render() {
    const { visible, children, onHide, className } = this.props;

    if(!visible) return null;

    return (
      <div>
        <div className="modal-wrapper">
          <EyeCatchy onHide={onHide}>
            <div className={`modal ${className}`}>
              { children }
            </div>
          </EyeCatchy>
        </div>
        <Dimmer/>
      </div>
    )
  }
}

export default Modal;