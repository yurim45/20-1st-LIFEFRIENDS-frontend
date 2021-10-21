import React, { Component } from 'react';
import MainHeader from './MainHeader/MainHeader';
import MainNews from './MainNews/MainNews';
import MainCoupon from './MainCoupon/MainCoupon';
import MainGift from './MainGift/MainGift';
import MainProducts from './MainProducts/MainProducts';
import MainBottom from './MainBottom/MainBottom';
import './MainContents.scss';

class MainContents extends Component {
  constructor() {
    super();
    this.pageSize = Math.round(document.documentElement.clientWidth * 0.8);
    this.sliderRef = React.createRef();
    this.state = {
      giftData: [],
      items: [],
      pageSize: Math.round(document.documentElement.clientWidth * 0.8),
      target: Math.ceil(this.pageSize / 230) - 2,
      cnt: 0,
      modalOn: false,
    };
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
    return (
      <main>
        <MainHeader />
        <MainNews />
        <MainCoupon />
        <MainGift handlePrevBtn={this.handlePrevBtn} />
        <MainBottom />
        <MainProducts />
      </main>
    );
  }
}

export default MainContents;
