import React from "react";

function ReactSection() {
  return (
    <section id="react" className="site">
      <div className="react__section__inner">
        <h3 className="vertical__tit">REACT SITE & API</h3>
        <div className="react__section">
          <div className="move__text__inner">
            <h3 className="react__section__tit animation01">
              REACT • SITE • REACT • API •&nbsp;
            </h3>
            <h3 className="react__section__tit animation01">
              REACT • SITE • REACT • API •&nbsp;
            </h3>
          </div>
          <div className="figure__inner">
            <div className="figure figure1 right">
              <div className="figureImg"></div>
              <a
                href="https://react-api-333.netlify.app/movie"
                className="page__btn"
              >
                page
              </a>
              <a
                href="https://github.com/hjkang306/react_api"
                className="source__btn"
              >
                source
              </a>
            </div>
            <div className="figure figure2 empty"></div>
            <div className="figure figure3 left">
              <div className="figureImg"></div>
              <a
                href="https://react-api-333.netlify.app/unsplash"
                className="page__btn"
              >
                page
              </a>
              <a
                href="https://github.com/hjkang306/react_api"
                className="source__btn"
              >
                source
              </a>
            </div>
            <div className="figure figure4 empty"></div>
            <div className="figure figure5 empty"></div>
            <div className="figure figure6 right">
              <div className="figureImg"></div>
              <a
                href="https://react-api-333.netlify.app/youtube"
                className="page__btn"
              >
                page
              </a>
              <a
                href="https://github.com/hjkang306/react_api"
                className="source__btn"
              >
                source
              </a>
            </div>
            <div className="figure figure7 left">
              <div className="figureImg"></div>
              <a
                href="https://react-api-333.netlify.app/about"
                className="page__btn"
              >
                page
              </a>
              <a
                href="https://github.com/hjkang306/react_api"
                className="source__btn"
              >
                source
              </a>
            </div>
          </div>
          <div className="react__img__inner site__img__inner">
            <div className="react__desc">
              <p className="react__txt">
                웹 표준을 준수한 간단한 REACT 사이트를 만들어 보았습니다.
              </p>
              <a
                href="https://react-site-333.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                사이트 바로가기 →
              </a>
              <a
                href="https://github.com/hjkang306/react01"
                target="_blank"
                rel="noreferrer"
              >
                소스 보기 →
              </a>
            </div>
            <img src="assets/img/reactApi.png" alt="리액트 목업 이미지" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReactSection;
