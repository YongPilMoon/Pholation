import React from 'react';
import Modal from 'components/common/Modal';
import { Field, reduxForm } from 'redux-form';
import MdError from 'react-icons/lib/md/error';


const validate = (values) => {
  const errors = {};

  if(!values.email) {
    errors.email = "이메일을 입력해 주세요"
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "이메일 형식을 확인해 주세요"
  }

  if(!values.password1) {
    errors.password1 = "비밀번호를 입력해 주세요"
  } else if(!/^[a-zA-Z0-9]{8,15}$/.test(values.password1)) {
    errors.password1 = "숫자, 영자 조합 8 ~ 15 자리를 입력해 주세요"
  }

  if(!values.password2) {
    errors.password2 = "비밀번호를 입력해 주세요"
  } else if(!/^[a-zA-Z0-9]{8,15}$/.test(values.password2)) {
    errors.password2 = "숫자, 영자 조합 8 ~ 15 자리를 입력해 주세요"
  } else if(!(values.password1 === values.password2)) {
    errors.password2 = "비밀번호가 일치하지 않습니다"
  }

  return errors;
};


const renderField = ({ input, type, placeholder, meta: { touched, error }}) => (
  <div>
    <input {...input} type={type} placeholder={placeholder} className="signup-input"/>
    <div className="display-error">{ touched && ((error) && <span><MdError/> {error}</span>) }</div>
  </div>
);

const SignUpModal = (props) => {
  const { handleSubmit, submitting, onHide, visible } = props;

  return (
      <Modal
          onHide={onHide}
          visible={visible}
          className="signup-modal"
      >
      <div className="signup-header">PHOLATION</div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-input-wrapper">
          <Field name="email" component={renderField} type="text" placeholder="E-mail"/>
          <Field name="password1" component={renderField} type="password" placeholder="Password"/>
          <Field name="password2" component={renderField} type="password" placeholder="Password Check"/>
        </div>
        <button className="signup-input signup-button" type="submit" disabled={submitting}>회원가입</button>
      </form>
      </Modal>
  );
};


export default reduxForm({
  form: 'signup',
  validate
})(SignUpModal)