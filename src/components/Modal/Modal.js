import React, { Component } from 'react';
import '../Modal/Modal.scss';

export class Modal extends Component {
  render() {
    const { open, close, title, content } = this.props;
    return (
      <div className={open ? 'openModal modal' : 'modal'}>
        {open && (
          <section>
            <div className="header">
              {title}
              <button className="close" onClick={close}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <main>{content}</main>
          </section>
        )}
      </div>
    );
  }
}

export default Modal;
