import React from 'react';
import GoTop from '../GoToTop/GoTop';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    const footerMenu = [
      '라이퍼 약관',
      '라이퍼페이 약관',
      '전자금융거래 이용약관',
      '개인정보처리방침',
      '청소년보호정책',
      '지식재산권신고센터',
      '안전거래 가이드',
      '쇼핑&페이',
      '고객센터',
    ];

    return (
      <footer className="footer">
        <section className="brandInfo">
          <div className="notice">
            <i className="fas fa-exclamation-circle" />
            반품 배송비, 반품 배송주소 등은 해당 상품 페이지 내 안내를
            참고해주세요.
            <span>라이프 프렌즈 주식회사 고객센터 1577-7777</span>
          </div>
          <ul className="footerMenu">
            {footerMenu.map(item => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          <div className="companyContact">
            <div className="lifer">
              <b>라이퍼㈜</b>
              <br />
              사업자등록번호 123-45-678910 | 통신판매업 신고번호
              2020-서울선릉-301호
              <br />
              대표이사 | 라이펄 서울시 강남구 선릉로 라이퍼 라이트그린플랜트
              12345
              <br />
              전화 1111-7777 | 이메일 helpcustomer@lifer.com | 사업자등록정보
              확인
              <br />
              호스팅 서비스 제공 : LIFER Business Platform
            </div>
            <div className="QnA">
              <b>고객센터</b>
              <br />
              제주도 서귀포시 한라산 데이터센터
              <br />
              전화 1111-7777 전화 전 클릭
              <br />
              결제도용신고 1111-7777
              <br />
              <span>1:1문의 바로가기</span>
            </div>
            <div className="conflicts">
              <b>전자금융거래 분쟁처리</b>
              <br />
              전화 1111-7777
              <br />
              <span>1:1문의 바로가기</span>
            </div>
          </div>
          <div className="companyGuideline">
            라이퍼㈜는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품,
            상품정보, 거래에 관한 의무와 책임은 판매자에게 있습니다.
          </div>
          <div className="copyRights">
            <span>L I F E R</span>
            <p>Copyright ©LIFER Corp.All Rights Reserved.</p>
          </div>
        </section>
        <GoTop />
      </footer>
    );
  }
}

export default Footer;
