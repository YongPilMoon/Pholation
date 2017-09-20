import React from 'react';
import Modal from 'components/common/Modal';

const SignUpModal = ({visible, onHide}) => {
  return (
      <Modal
          onHide={onHide}
          visible={visible}
          className="signup-modal"
      >
      안녕하세요 모달 입니다.
      </Modal>
  );
};

export default SignUpModal;