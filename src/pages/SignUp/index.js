import { Component } from 'react';
import SignUpForm from '../../components/Form/SignUpForm';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      re_password: '',
      name: '',
      birth_date: '',
      gender: '',
      phone_number: '',
      verifying_number: '',
    };
  }

  goToLogin = e => {
    e.preventDefault();
    const SIGNUPAPI = 'http://10.58.7.181:8000/users/signup';
    const { email, password, name, birth_date, gender, phone_number } =
      this.state;
    fetch(SIGNUPAPI, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        name,
        birth_date,
        gender,
        phone_number,
      }),
    })
      .then(res => {
        switch (res.status) {
          case 400:
          case 401:
            alert('값을 확인해주세요.');
            break;

          case 201:
            alert('회원가입 성공');
            return res.json();

          default:
            alert('잘못된 접근입니다. 경로를 다시한번 확인해주세요.');
        }
      })
      .then(res => {
        if (!res) {
          return;
        } else if (res.message === 'SUCCESS') {
          //push to Login
          this.props.history.push('./login');
        }
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <SignUpForm
        type="SignUp"
        text="회원가입"
        signUpState={{ ...this.state }}
        goToLogin={this.goToLogin}
        handleInput={this.handleInput}
      />
    );
  }
}
