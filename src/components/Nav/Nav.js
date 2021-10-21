import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList/CategoryList';
import LoginAndLogout from '../Nav/LoginAndLogout/LoginAndLogout';
import './Nav.scss';

export class Navigator extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryListData: [],
      searchValue: '',
      searchList: [],
    };
  }

  componentDidMount() {
    fetch('/Data/CategoryData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ categoryListData: data.results });
      });
  }

  handleSearchValue = e => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  render() {
    const filteredList =
      this.state.categoryListData &&
      this.state.categoryListData.filter(category => {
        return (
          category.menuName
            .toLowerCase()
            .includes(this.state.searchValue.toLowerCase()) && category
        );
      });
    const filterLength = filteredList && filteredList.length;
    return (
      <div className="navAndHeader">
        <div className="lifeStoreNav">
          <header className="navHeader">
            <div className="navHeaderLeft">
              <a className="toMoveNaverPage" href="/#">
                LIEFER
              </a>
              <a className="toMoveNaverShopping" href="/#">
                라이퍼쇼핑
              </a>
            </div>
            <LoginAndLogout />
          </header>
          <nav className="navBody">
            <div className="logoAndSearch">
              <Link className="logoLifeStore" to="/">
                <button className="logoLifeStore">L I F E S T O R E</button>
              </Link>
              <div className="searchBox">
                <input
                  className="search"
                  type="text"
                  placeholder="검색어를 입력해보세요"
                  onChange={this.handleSearchValue}
                />
                <button className="searchButton">
                  <i className="fas fa-search"></i>
                </button>
                <ul
                  className={`searchListContainer ${
                    this.state.searchValue && filterLength && 'open'
                  }`}
                >
                  {filterLength > 0 &&
                    filteredList.map(category => {
                      return (
                        <li key={category.menuId}>
                          <div>
                            <Link
                              to={`/categories?&menu=${category.menuName}`}
                              className="categoryName"
                            >
                              {category.menuName}
                            </Link>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </nav>
          <CategoryList eachCategoryList={this.state.categoryListData} />
        </div>
      </div>
    );
  }
}
export default Navigator;
