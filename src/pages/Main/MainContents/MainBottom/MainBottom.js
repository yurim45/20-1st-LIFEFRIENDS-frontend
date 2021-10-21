import React, { Component } from 'react';
import '../MainBottom/MainBottom.scss';

class MainBottom extends Component {
  render() {
    return (
      <section className="mainBottom">
        <div className="bottomContents">
          <h2 className="title">LIFE FRIENDS</h2>
          <div className="bottomContent">
            <p>끝없는 득템의 재미</p>
            <p>LIFE FRIENDS 공식 브랜드 스토어</p>
            <p>#LIFEFRIENDS #Character #Goods</p>
            <div>
              <button>찜하기 158,355</button>
              <span>
                <i className="far fa-share-square" />
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainBottom;
