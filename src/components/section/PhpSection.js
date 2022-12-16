import React from "react";

function PhpSection() {
  return (
    <section id="php" className="site">
      <div className="php__section__inner">
        <h3 className="vertical__tit">PHP SITE</h3>
        <div className="php__section">
          <div className="move__text__inner">
            <h3 className="php__section__tit animation01">
              PHP • SITE • PHP • SITE •&nbsp;
            </h3>
            <h3 className="php__section__tit animation01">
              PHP • SITE • PHP • SITE •&nbsp;
            </h3>
          </div>
          <div className="figure__inner">
            <div className="figure figure1 right">
              <div className="figureImg"></div>
              <a
                href="http://hjkang306.dothome.co.kr/backup/project/php/category/category_R.php"
                className="page__btn"
              >
                page
              </a>
              <a
                href="https://github.com/hjkang306/codingclassName/tree/main/backup/Project/php/category"
                className="source__btn"
              >
                source
              </a>
            </div>
            <div className="figure figure2 empty"></div>
            <div className="figure figure3 left">
              <div className="figureImg"></div>
              <a
                href="http://hjkang306.dothome.co.kr/backup/project/php/category/small_cg_detail.php?categoryBig=%EC%B7%A8%EB%AF%B8&categorySmall=%EB%93%B1%EC%82%B0&myTipsID=102"
                className="page__btn"
              >
                page
              </a>
              <a
                href="https://github.com/hjkang306/codingclassName/blob/main/backup/Project/php/category/small_cg_detail.php"
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
                href="http://hjkang306.dothome.co.kr/backup/project/php/Notice/QnACate.php?category=%EC%A0%84%EC%9E%90%EA%B8%B0%EA%B8%B0"
                className="page__btn"
              >
                page
              </a>
              <a
                href="https://github.com/hjkang306/codingclassName/tree/main/backup/Project/php/Notice"
                className="source__btn"
              >
                source
              </a>
            </div>
            <div className="figure figure7 left">
              <div className="figureImg"></div>
              <a
                href="http://hjkang306.dothome.co.kr/backup/project/php/login/joinAgree.php"
                className="page__btn"
              >
                page
              </a>
              <a
                href="https://github.com/hjkang306/codingclassName/tree/main/backup/Project/php/login"
                className="source__btn"
              >
                source
              </a>
            </div>
          </div>
          <div className="php__img__inner site__img__inner">
            <div className="php__desc">
              <p className="php__txt">
                궁금한 것을 물어보고, 일상의 정보를 얻을 수 있는 PHP를 이용한 웹
                페이지를 만들었습니다.
              </p>
              <a
                href="http://hjkang306.dothome.co.kr/backup/project/php/main/main.php"
                target="_blank"
                rel="noreferrer"
              >
                사이트 바로가기 →
              </a>
              <a
                href="https://github.com/hjkang306/codingclassName/tree/main/backup/Project/php/"
                target="_blank"
                rel="noreferrer"
              >
                소스 보기 →
              </a>
            </div>
            <img src="assets/img/phpProject.png" alt="PHP 목업 이미지" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhpSection;
