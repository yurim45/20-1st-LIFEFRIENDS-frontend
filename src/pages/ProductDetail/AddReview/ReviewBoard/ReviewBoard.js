import React, { Component } from 'react';
import './ReviewBoard.scss';

class ReviewBoard extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      mapValue: [5, 4, 3, 2, 1],
    };
  }

  changeAverage = avgValue => {
    if (isNaN(avgValue)) return;
    const node = this.myRef.current.childNodes;
    const num = Number(String(avgValue).substr(0, 1));
    const point = Number(String(avgValue).substr(2, 1));

    if (num === 5) {
      for (let i = 0; i < num; i++) {
        node[i].style.color = '#f84f50';
      }
    } else {
      for (let i = 0; i < num; i++) {
        node[i].style.color = '#f84f50';
      }
      node[
        num
      ].style.background = `linear-gradient(to right, #f84f50 ${point}0%, #ebe9e9 ${
        10 - point
      }0%)`;
      node[num].style.WebkitBackgroundClip = 'text';
      node[num].style.color = 'transparent';
    }
  };

  // handleRating = () => {
  //   const { ratio } = this.props;
  //   for (let i = 0; i < ratio.length; i++) {
  //     if (ratio[i].rating === i + 1) {
  //       console.log(ratio[i].rate_count);
  //     }
  //   }
  // };

  render() {
    const { mapValue } = this.state;
    const { reviewData } = this.props;
    let avgVal = 0;
    let avgValue = 0;
    for (let i = 0; i < reviewData.length; i++) {
      avgVal = reviewData[i].rating + avgVal;
    }
    avgValue = avgVal / reviewData.length;
    this.changeAverage(avgValue);

    return (
      <section className="board">
        <div className="average">
          <strong className="subtitle">사용자 총 평점</strong>
          <div ref={this.myRef}>
            {mapValue.map(el => {
              return <i key={el} className="fas fa-star" />;
            })}
          </div>
          <p>
            <span>{avgValue ? Number(avgValue).toFixed(1) : 0}</span> / 5
          </p>
        </div>
        <div className="totalReview">
          <strong className="subtitle">전체 리뷰 수</strong>
          <p>
            <i class="far fa-comment-dots" />
          </p>
          <p>{reviewData.length}</p>
        </div>
        <div className="ratio">
          <strong className="subtitle">평점 비율</strong>
          <ul>
            {mapValue.map(el => {
              return (
                <li key={el} className={`ratioBar ${el}`}>
                  <div className="ratioValue" />
                  <p>{el}점</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default ReviewBoard;
