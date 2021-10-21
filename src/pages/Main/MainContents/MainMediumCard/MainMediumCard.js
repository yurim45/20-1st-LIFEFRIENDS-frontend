import React, { Component } from 'react';
import Modal from '../../../../components/Modal/Modal';
import '../MainMediumCard/MainMediumCard.scss';

class MainMediumCard extends Component {
  constructor() {
    super();
    this.state = {
      modalOn: false,
    };
  }

  openModal = () => {
    this.setState({ modalOn: true });
  };

  closeModal = () => {
    this.setState({ modalOn: false });
  };

  render() {
    const { data } = this.props;
    return (
      <div className="mainMediumCard ">
        {data &&
          data.map(el => {
            return (
              <>
                <div className="mediumCard" key={el.id}>
                  <img alt={el.imgAlt} src={el.imgUrl} />
                  <div className="hoverButtonBundle">
                    <img
                      className="hoverButton"
                      alt="heartButton"
                      src="/images/heart.png"
                    />
                    <img
                      onClick={this.openModal}
                      className="hoverButton"
                      alt="heartButton"
                      src="/images/plus.png"
                    />
                  </div>
                  <p>{el.cost}원</p>
                  <p>{el.name}</p>
                </div>
              </>
            );
          })}
        <Modal
          open={this.state.modalOn}
          close={this.closeModal}
          title="LIFE FRIENDS"
          content="선택한 상품이 장바구니에 담겼습니다."
        />
      </div>
    );
  }
}

export default MainMediumCard;
