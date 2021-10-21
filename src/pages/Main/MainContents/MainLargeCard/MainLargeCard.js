import React, { Component } from 'react';
import '../MainLargeCard/MainLargeCard.scss';

class MainLargeCard extends Component {
  render() {
    const { mainNews } = this.props;
    return (
      <div className="mainLargeCard">
        {mainNews &&
          mainNews.map(el => {
            return (
              <div key={el.id}>
                <img alt={el.imgAlt} src={el.imgUrl} />
                <h3>{el.title}</h3>
                <p>{el.desc}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default MainLargeCard;
