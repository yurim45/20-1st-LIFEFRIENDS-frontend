import React, { Component } from 'react';
import ReviewBoard from './ReviewBoard/ReviewBoard';
import './AddReview.scss';
import { GET_REVIEW_API } from '../../../config';

class AddReview extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      reviewText: 0,
      reviewImgUrl: null,
      reviewData: 0,
      ratingValue: '',
      mapValue: [1, 2, 3, 4, 5],
    };
  }

  uploadReviewData = () => {
    const loggedInfo = localStorage.getItem('AUTHORIZATION');
    const { ratingValue, reviewText, reviewImgUrl } = this.state;
    fetch(`${GET_REVIEW_API}/1`, {
      method: 'POST',
      headers: {
        AUTHORIZATION: loggedInfo,
      },
      body: JSON.stringify({
        rating: ratingValue,
        text: reviewText,
        review_image_url: reviewImgUrl,
        product_size: '11',
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.REVIEW === 'SUCCESS') {
          alert('리뷰가 등록되었습니다 👍');
        } else if (data.MESSAGE === 'LOGIN_REQUIRED') {
          alert('로그인을 해주세요! 🥲');
        }
      });
  };

  mouseOverHandler = e => {
    const dataValue = e.target.dataset.value;
    const targetList = e.target.parentNode.childNodes;
    for (let i = 0; i < dataValue; i++) {
      targetList[i].style.color = 'red';
    }
  };

  mouseLeaveHandler = e => {
    const targetList = e.target.parentNode.childNodes;
    for (let i = 0; i < targetList.length; i++) {
      targetList[i].style = '';
    }
  };

  getRating = e => {
    const dataValue = Number(e.target.dataset.value);
    const targetList = e.target.parentNode.childNodes;
    const node = this.myRef.current;
    for (let i = 0; i < targetList.length; i++) {
      if (targetList[i].className.includes('redstar')) {
        targetList[i].className = 'fas fa-star';
      } else {
        for (let i = 0; i < dataValue; i++) {
          targetList[i].className = 'fas fa-star redstar';
        }
      }
    }
    this.setState({
      ratingValue: dataValue,
    });

    switch (Number(dataValue)) {
      case 1:
        node.style.color = 'red';
        node.innerHTML = '<span>1점</span> (별로예요😡)';
        break;
      case 2:
        node.style.color = 'red';
        node.innerHTML = '<span>2점</span> (그저그래요🙁)';
        break;
      case 3:
        node.style.color = 'red';
        node.innerHTML = '<span>3점</span> (괜찮아요👌)';
        break;
      case 4:
        node.style.color = 'red';
        node.innerHTML = '<span>4점</span> (좋아요😄)';
        break;
      case 5:
        node.style.color = 'red';
        node.innerHTML = '<span>5점</span> (최고예요👍)';
        break;
      default:
        node.innerHTML = '선택하세요';
        break;
    }
  };

  handleReviewText = e => {
    this.setState({
      reviewText: e.target.value,
    });
  };

  handleReviewImg = e => {
    this.setState({
      reviewImgUrl: e.target.value,
    });
  };

  render() {
    const { ratingValue, reviewText, mapValue } = this.state;
    const { reviewData, ratio } = this.props;
    const isValid = 10 <= reviewText.length;

    return (
      <div className="addReview">
        <h2>상품 리뷰</h2>
        <p>
          상품을 구매하신 분들이 작성하신 리뷰입니다. 리뷰 작성 시 포인트가
          적립됩니다.
        </p>
        <ReviewBoard reviewData={reviewData} ratio={ratio} />
        <div className="rating">
          <strong className="reviewTitle">상품은 만족하셨나요?</strong>
          <div>
            {mapValue.map(el => {
              return (
                <i
                  key={el}
                  className="fas fa-star"
                  data-value={el}
                  onMouseOver={this.mouseOverHandler}
                  onMouseLeave={this.mouseLeaveHandler}
                  onClick={this.getRating}
                />
              );
            })}
          </div>
          <p ref={this.myRef}>선택하세요</p>
        </div>
        <article className="addReviewArticle">
          <strong className="reviewTitle">
            {ratingValue && `만족도 ${ratingValue}점을 주셨네요`}
            <br />
            어떤 점이 좋았나요?
          </strong>
          <div className="reviewContent">
            <textarea
              cols="30"
              placeholder="최소 10자 이상 입력해주세요"
              onChange={this.handleReviewText}
            ></textarea>
            <p>{reviewText ? reviewText.length : 0}/ 5,000</p>
          </div>
          <div>
            <div className="addImgBtn">
              <input
                type="file"
                accept="image/*"
                capture="user"
                onChange={this.handleReviewImg}
              />
            </div>
            <p>상품과 무관한 사진을 첨부한 리뷰는 통보없이 삭제됩니다.</p>
          </div>
        </article>
        <div className="btn">
          <button
            disabled={isValid ? false : true}
            className={isValid ? 'activeBtn' : ''}
            onClick={this.uploadReviewData}
          >
            등록
          </button>
        </div>
      </div>
    );
  }
}

export default AddReview;
