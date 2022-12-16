import React from "react";

function AboutMe02() {
  return (
    <div className="about__me02 container">
      <div className="about__me02__text">
        <div className="about__me02__text__tit">
          성실하고 열정이 있는 인재,{" "}
          <span className="point__color">도전과 노력으로</span> 일하는 사람,
          가장 빛나는 전문가가 되기 위하여, 마음 먹은 일은 꼭 하고 마는 사람
        </div>
        <p className="about__me02__text__desc">
          “인내의 기술을 배워라. 목표를 달성할 수 있을지 마음이 불안해 질 때,
          단련한 대로 마음을 다스려라. 인내하지 못하면 긴장감과 두려움이 생기고
          낙담해 실패한다. 인내할 줄 알아야 자신감, 결단력, 합리적 시각이 생겨서
          끝내 성공할 수 있다.”
          <br />- 브라이언 아담스 -
        </p>
      </div>
      <div className="about__me02__img__inner">
        <details
          className="about__me02__img__wrap about__me02__img__wrap01 drag"
          open
        >
          <summary className="about__me02__img__tit">It's me!</summary>
          <img src="assets/img/me04.jpg" alt="내 모습 이미지 04" />
        </details>
        <details
          className="about__me02__img__wrap about__me02__img__wrap02 drag"
          open
        >
          <summary className="about__me02__img__tit">It's me!</summary>
          <img src="assets/img/me05.jpg" alt="내 모습 이미지 05" />
        </details>
      </div>
    </div>
  );
}

export default AboutMe02;
