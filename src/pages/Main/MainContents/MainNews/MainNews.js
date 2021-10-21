import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainLargeCard from '../MainLargeCard/MainLargeCard';
import '../MainNews/MainNews.scss';

class MainNews extends Component {
  constructor() {
    super();
    this.state = {
      mainNews: [],
    };
  }

  componentDidMount() {
    fetch('/data/mainNews.json')
      .then(response => response.json())
      .then(newsData => {
        this.setState({ mainNews: newsData });
      });
  }

  render() {
    const { mainNews } = this.state;
    return (
      <section className="mainNews mainLargeCards">
        <article>
          <h2 className="title">주목할만한 소식</h2>
          <MainLargeCard mainNews={mainNews} />
          <Link to="/3000/product?menu=전체상품" className="linkBtn">
            쇼핑 스토리 전체 보기
          </Link>
        </article>
      </section>
    );
  }
}

export default MainNews;
