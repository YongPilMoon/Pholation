import React, { Component } from 'react';
import Header from 'containers/base/Header';
import MainPage from 'components/page/MainPage';
import SignupModal from 'containers/modals/SignupModal';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modal from 'redux/modules/base/modal';

class App extends Component {

  handleModal = (() => {
    const { ModalActions } = this.props;
    return {
      open: ({modalName, payload}) => {
        ModalActions.openModal({modalName, payload})
      },
      close: (modalName) => {
        ModalActions.closeModal(modalName)
      }
    }
  })();

  submit = (value) => {
    console.log(value)
  };

  render() {
    const { modal } = this.props.status;
    const { handleModal, submit } = this;
    return (
        <div className="App">
          <MainPage/>
          <Header onClick={() =>  handleModal.open({modalName: 'signup'})}/>
          <SignupModal visible={modal.getIn(['signup','open'])} onHide={() => handleModal.close('signup')} onSubmit={submit}/>
        </div>
    );
  }
}

export default connect(
    state => ({
      status:{
        modal: state.base.modal
      }
    }),
    dispatch => ({
      ModalActions: bindActionCreators(modal, dispatch)
    })
)(App);            
    