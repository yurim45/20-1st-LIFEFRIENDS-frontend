import React, { useState, useEffect, useRef } from 'react';
import headerdata from './headerdata';
import styled from 'styled-components';
import { flexSet } from '../../../../styles/Variable';

const clickedPage = [
  {
    id: 1,
    title: '함께해서 위코드',
    desc: 'LIFE FRIENDS & Character',
    imgAlt: 'character',
    imgUrl:
      'https://images.unsplash.com/photo-1521249635712-69ca33adf729?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNoYXJhY3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];

export default function MainHeader() {
  const [headerData, setHeaderData] = useState([]);
  const [elNum, setElNum] = useState(1);

  const myRef = useRef();

  useEffect(() => {
    setHeaderData(headerdata);
    setInterval(handleNextBtn, 3000);
    return () => clearInterval(setInterval(handleNextBtn, 3000));
  }, []);

  const changePage = e => {
    // const { headerData } = this.state;
    // const elNum = e.target.parentElement.className;
    // headerData.forEach(el => {
    //   if (Number(elNum) === el.id) {
    //     this.setState({
    //       clickedPage: [headerData[elNum - 1]],
    //       elNum: Number(elNum),
    //     });
    //   }
    // });
  };

  const handlePrevBtn = () => {
    // const { headerData, elNum } = this.state;
    // let pageNum = elNum;
    // if (elNum > 0 && elNum < headerData.length) {
    //   this.setState({
    //     elNum: pageNum - 1,
    //     clickedPage: [headerData[elNum]],
    //   });
    // } else if (elNum <= 0) {
    //   this.setState({
    //     elNum: headerData.length - 1,
    //     clickedPage: [headerData[elNum]],
    //   });
    // }
  };

  const handleNextBtn = () => {
    // const { headerData, elNum } = this.state;
    // let pageNum = elNum;
    // if (elNum >= 0 && elNum < headerData.length - 1) {
    //   this.setState({
    //     elNum: pageNum + 1,
    //     clickedPage: [headerData[elNum]],
    //   });
    // } else if (elNum <= headerData.length - 1) {
    //   set
    //   this.setState({
    //     elNum: 0,
    //     clickedPage: [headerData[elNum]],
    //   });
    // }
  };

  const changeBtnColor = e => {
    // const targetList = e.target.parentNode.parentNode.childNodes;
    // for (let i = 0; i < headerData.length; i++) {
    //   if (targetList[i].childNodes[0].className === 'onClick') {
    //     targetList[i].childNodes[0].className = '';
    //   }
    //   e.target.className = 'onClick';
    // }
  };

  return (
    <MainHeaderWrap>
      <div>
        {clickedPage[0] && (
          <Carousel>
            <Title>
              <h1>{clickedPage[0].title}</h1>
              <p>{clickedPage[0].desc}</p>
            </Title>
            <ul>
              <li>
                <img
                  ref={myRef}
                  alt={clickedPage[0].imgAlt}
                  src={clickedPage[0].imgUrl}
                />
              </li>
            </ul>
          </Carousel>
        )}
      </div>
      <PrevNextBtnWrap>
        <p className="prev" onClick={handlePrevBtn}>
          <i className="fas fa-chevron-left" />
        </p>
        <p className="next" onClick={handleNextBtn}>
          <i className="fas fa-chevron-right" />
        </p>
      </PrevNextBtnWrap>
      <ContentPageBtn>
        {headerData.length &&
          headerData.map(el => {
            return (
              <li key={el.id} className={el.id} onClick={changeBtnColor}>
                <button onClick={changePage} />
              </li>
            );
          })}
      </ContentPageBtn>
    </MainHeaderWrap>
  );
}

const MainHeaderWrap = styled.header`
  width: 90%;
  height: 50em;
  margin: auto;

  /* .div {
    flex-wrap: nowrap;
    overflow: hidden;
  } */
`;

const Carousel = styled.div`
  margin: auto;

  ul {
    width: 90%;

    li {
      /* @include flexBox(center, center, row); */
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: -2;

      img {
        position: sticky;
        width: 100%;
        height: 775px;
        object-fit: cover;
        z-index: -1;
        opacity: 1;
      }
    }
  }
`;

const Title = styled.div`
  display: inline-block;
  position: relative;
  top: 240px;
  left: 10%;

  @media ${({ theme }) => theme.laptop} {
    left: 0;
  }

  h1 {
    width: 55%;
    margin-bottom: 40px;
    font-size: 56px;
    font-weight: 900;
    line-height: 1.2;
  }

  p {
    font-size: 16px;
  }
`;

const ContentPageBtn = styled.ul`
  ${flexSet('space-around', 'center')}
  width: 120px;
  position: relative;
  bottom: -33.5em;
  margin: 0 auto;

  button {
    width: 12px;
    height: 12px;
    background-color: black;
    opacity: 0.3;
    border-radius: 50%;
    z-index: 2;
  }
`;

const PrevNextBtnWrap = styled.div`
  width: 90%;

  .prev,
  .next {
    position: absolute;
    top: 50%;
    width: 70px;
    height: 70px;
  }

  .prev {
    left: 5%;
  }

  .next {
    right: 5%;
  }
`;
