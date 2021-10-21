import React from 'react';
import { withRouter } from 'react-router-dom';
import './CategoryList.scss';

export class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsToShow: 10,
      expanded: false,
    };
  }

  goToMenuList = menuIndex => {
    const { eachCategoryList } = this.props;
    this.props.history.push(
      `/categories?&menu=${eachCategoryList[menuIndex].menuName}`
    );
  };

  goToCategoryList = (menuIndex, categoryIndex) => {
    const { eachCategoryList } = this.props;
    this.props.history.push(
      `/categories?&theme=${eachCategoryList[menuIndex].categoryList[categoryIndex].categoryName}`
    );
  };

  showMore = () => {
    const { eachCategoryList } = this.props;
    this.state.itemsToShow === 10
      ? this.setState({ itemsToShow: eachCategoryList.length, expanded: true })
      : this.setState({ itemsToShow: 10, expanded: false });
  };

  render() {
    const { eachCategoryList } = this.props;

    return (
      <div className="totalCategoryList">
        <div className="categoryList">
          {eachCategoryList &&
            eachCategoryList.slice(0, 10).map(menuObj => {
              return (
                <div key={menuObj.menuId} className="categoryMenu">
                  <span
                    className="categoryText"
                    onClick={() => {
                      this.goToMenuList(menuObj.menuId - 1);
                    }}
                  >
                    {menuObj.menuName}
                    {menuObj.categoryList.length > 0 && (
                      <i className="fa fa-caret-down"></i>
                    )}
                  </span>

                  {menuObj.categoryList.length > 0 && (
                    <div className="subMenuList">
                      {menuObj.categoryList.map(subMenuObj => (
                        <span
                          key={subMenuObj.categoryId}
                          className="subMenu"
                          onClick={() => {
                            this.goToCategoryList(
                              menuObj.menuId - 1,
                              subMenuObj.categoryId - 1
                            );
                          }}
                        >
                          {subMenuObj.categoryName}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          <button
            className="showMoreButton"
            onClick={() => {
              this.showMore();
            }}
          >
            <span className="ShowMoreLess">
              {this.state.expanded ? (
                <span>
                   닫기<i className="fas fa-angle-up"></i>
                </span>
              ) : (
                <span>
                  더 보기<i className="fas fa-angle-down"></i>
                </span>
              )}
            </span>
          </button>
        </div>
        <div className="categoryListNextLine">
          {eachCategoryList &&
            eachCategoryList.slice(11, this.state.itemsToShow).map(menuObj => {
              return (
                <div key={menuObj.menuId} className="categoryMenuNextLine">
                  <span
                    className="categoryTextNextLine"
                    onClick={() => {
                      this.goToMenuList(menuObj.menuId - 1);
                    }}
                  >
                    {menuObj.menuName}
                    {menuObj.categoryList.length > 0 && (
                      <i className="fa fa-caret-down"></i>
                    )}
                  </span>
                  {menuObj.categoryList.length > 0 && (
                    <div className="subMenuListNextLine">
                      {menuObj.categoryList.map(subMenuObj => (
                        <span
                          key={subMenuObj.categoryId}
                          className="subMenuNextLine"
                          onClick={() => {
                            this.goToCategoryList(
                              menuObj.menuId - 1,
                              subMenuObj.categoryId - 1
                            );
                          }}
                        >
                          {subMenuObj.categoryName}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(CategoryList);
