import React, { Component, PropTypes } from 'react';
import onClickOutside from 'react-onclickoutside';

class Content extends Component {

  static PropTypes = {
    hide: PropTypes.func
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if(e.keyCode === 27){
      const { hide } = this.props;
      hide();
    }
  };

  handleClickOutside = (e) => {
    this.props.hide();
  };

  render() {
    const { children } = this.props;
    return children
  }
}

Content = onClickOutside(Content);

class EyeCatchy extends Component{

  static PropTypes = {
    onHide: PropTypes.func
  };

  handleHide = () => {
    const { onHide } = this.props;
    onHide();
  };


  render() {
    const { children, outsideClickIgnoreClass } = this.props;
    const { handleHide } = this;
    return (
        <Content hide={e=>handleHide()} outsideClickIgnoreClass={outsideClickIgnoreClass}>
          {children}
        </Content>
    )
  }
}

export default EyeCatchy;