import React from 'react';
import './GoTop.scss';

class GoTop extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', this.showButton);
  }

  showButton = () => {
    if (window.scrollY > 300) {
      this.setState({ isVisible: true });
    } else {
      this.setState({ isVisible: false });
    }
  };

  scrolltoTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  componentWillUnmount = () => {
    document.removeEventListener('scroll', this.showButton);
  };

  render() {
    return (
      <>
        {this.state.isVisible && (
          <button className="goToTop" onClick={this.scrolltoTop}>
            <i className="fas fa-chevron-up"></i>
          </button>
        )}
      </>
    );
  }
}
export default GoTop;
