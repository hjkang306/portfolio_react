import React from "react";

function Home() {
  return (
    <section id="home">
      <div className="move__text__inner">
        <h2 className="main__title animation01">
          journey • to • be • front-end • developer •&nbsp;
        </h2>
        <h2 className="main__title animation01">
          journey • to • be • front-end • developer •&nbsp;
        </h2>
      </div>
      <div className="figure__inner">
        <div className="homeDecoInner">
          <div className="star rotateY">*</div>
          <div className="hover__txt">hover me !</div>
        </div>
        <div className="figure figure1">
          <div className="sunglass"></div>
          <img src="assets/img/kang01.png" alt="내 모습 이미지" />
        </div>
        <div className="figure figure2"></div>
        <div className="figure figure3"></div>
        <div className="figure figure4"></div>
        <div className="figure figure5"></div>
      </div>
    </section>
  );
}

export default Home;
