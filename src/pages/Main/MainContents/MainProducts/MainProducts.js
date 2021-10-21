import React, { Component } from 'react';
import MainMediumCard from '../MainMediumCard/MainMediumCard';
import '../MainProducts/MainProducts.scss';

class MainProducts extends Component {
  constructor() {
    super();
    this.state = {
      productstData: [],
      items: 8,
      preItems: 0,
    };
  }

  getData = () => {
    const { preItems, items } = this.state;
    fetch('http://10.58.7.181:8000/categories/all')
      .then(response => response.json())
      .then(productstData => {
        let dataToAdd = productstData.MESSAGE.slice(preItems, items);
        this.setState({
          productstData: [...this.state.productstData, ...dataToAdd],
        });
      });
  };

  componentDidMount() {
    this.getData();
    window.addEventListener('scroll', this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  infiniteScroll = () => {
    const { documentElement, body } = document;
    const { items } = this.state;
    const scrollHeight = Math.max(
      documentElement.scrollHeight,
      body.scrollHeight
    );
    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    const clientHeight = documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      this.setState({
        preItems: items,
        items: items + 8,
      });
      this.getData();
    }
  };

  render() {
    const { productstData } = this.state;
    return (
      <section className="mainProducts mainMiddleCards">
        <article className="mainGoods">
          <h2 className="title">마음껏 둘러보세요</h2>
          <MainMediumCard data={productstData} />
        </article>
      </section>
    );
  }
}

export default MainProducts;
