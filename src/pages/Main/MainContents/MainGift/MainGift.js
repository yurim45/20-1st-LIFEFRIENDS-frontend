import React, { Component } from 'react';
import MainMediumCard from '../MainMediumCard/MainMediumCard';
import '../MainGift/MainGift.scss';
import { GET_GIFT_API } from '../../../../config';

class MainGift extends Component {
  constructor() {
    super();
    this.pageSize = Math.round(document.documentElement.clientWidth * 0.8);
    this.sliderRef = React.createRef();
    this.state = {
      giftData: 0,
      items: 0,
      pageSize: Math.round(document.documentElement.clientWidth * 0.8),
      target: Math.ceil(this.pageSize / 230) - 1,
      cnt: 0,
      modalOn: false,
    };
  }

  componentDidMount() {
    const { target } = this.state;
    // fetch('http://10.58.7.181:8000/products/categories?menu=선물추천')
    fetch(GET_GIFT_API)
      .then(response => response.json())
      .then(giftdata => {
        this.setState({
          giftData: giftdata.message,
          items: giftdata.message,
          cnt: target,
        });
      });
  }

  handlePrevBtn = e => {
    const { giftData, target, cnt } = this.state;
    if (cnt <= 0) {
      this.setState({
        cnt: cnt + target,
      });
      e.preventDefault();
    } else {
      let dataToChange = giftData.slice(cnt - target, cnt + target);
      this.setState({
        cnt: cnt - target,
        items: dataToChange,
      });
    }
  };

  handleNextBtn = e => {
    const { giftData, cnt, target } = this.state;
    if (giftData.length <= cnt) {
      this.setState({
        cnt: cnt - target,
      });
      e.preventDefault();
    } else {
      let dataToChange = giftData.slice(cnt, cnt + target);
      this.setState({
        cnt: cnt + target,
        items: dataToChange,
      });
    }
  };

  render() {
    const { items } = this.state;
    return (
      <section className="mainGift mainMiddleCards">
        <article>
          <h2 className="title">선물하기 좋은 제품</h2>
          {items && (
            <MainMediumCard
              data={items}
              openModal={this.openModal}
              ref={this.sliderRef}
            />
          )}
          <div>
            <p className="prev" onClick={this.handlePrevBtn}>
              <i className="fas fa-chevron-left" />
            </p>
            <p className="next" onClick={this.handleNextBtn}>
              <i className="fas fa-chevron-right" />
            </p>
          </div>
        </article>
      </section>
    );
  }
}

export default MainGift;
