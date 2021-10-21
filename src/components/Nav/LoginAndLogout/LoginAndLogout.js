import React from 'react';
import { Link } from 'react-router-dom';
import './LoginAndLogout.scss';

export class LoginAndLogout extends React.Component {
  istAllInputValid = () => {
    const tokenValue = localStorage.getItem('AUTHORIZATION');
    fetch('http://172.16.20.241:8000/users/user', {
      method: 'GET',
      headers: { AUTHORIZATION: tokenValue },
    })
      .then(res => res.json())
      .then(res => {
        if (res.MESSAGE === 'SUCCESS') {
          localStorage.setItem('user_name', res.USER_INFO.user_name);
          localStorage.setItem('user_email', res.USER_INFO.user_email);
        }
        if (res.result === 'INVALID_USER') {
          return alert('비밀번호 또는 이메일이 잘 못 되었습니다.');
        }
      });
  };

  changeLogout = () => {
    localStorage.clear();
  };

  render() {
    this.istAllInputValid();
    return (
      <div className="LoginAndLogout">
        {localStorage.AUTHORIZATION ? (
          <div className="loggedIn">
            <span className="loggedInInfo">
              {localStorage.getItem('user_name')}님
              <div className="loggedInBox">
                <p className="loggedInUserName">
                  {localStorage.getItem('user_name')}님
                </p>
                <p className="loggedInUserEmail">
                  {localStorage.getItem('user_email')}
                </p>
                <button className="logoutButton" onClick={this.changeLogout}>
                  <Link to="/">로그아웃</Link>
                </button>
              </div>
            </span>
            <i className="fa fa-caret-down"></i>
            <button className="goToPickStore">
              <Link to={'/picked'}>찜한스토어</Link>
            </button>
            <button className="goToMypage">
              <Link to={'/myPage'}>마이페이지</Link>
            </button>
            <button className="goToCart">
              <Link to={'/cart'}>장바구니</Link>
            </button>
          </div>
        ) : (
          <div className="goToLogin">
            <Link to="/login">
              <button className="loginButton">로그인</button>
            </Link>
          </div>
        )}
        <a className="viewTotal" href="/#">
          <i className="fas fa-th"></i>
        </a>
      </div>
    );
  }
}

export default LoginAndLogout;
