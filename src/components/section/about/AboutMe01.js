import React from "react";

function AboutMe01() {
  return (
    <div className="about__me01">
      <div className="about__me01__text about__me01__text01">
        • <span className="point__color">식물</span> 키우기
        <br />
        <span className="point__color">뜨개질</span>로 작은 소품 만들기
        <br />
        좋아하는 <span className="point__color">노래</span> 많이 듣기
        <br />
        애정하는 뮤지션 <span className="point__color">공연</span> 보기
        <br />
        그리고 싶은 <span className="point__color">그림</span> 그리기
        <br />
        <span className="point__color">긍정적</span>으로 생각하기
        <br />
        작은 것에 <span className="point__color">행복</span>해하기
      </div>
      <div className="about__me01__text about__me01__text02">
        <span className="point__color">차분히</span> 생각하기
        <br />
        조금씩 꾸준히 <span className="point__color">노력하기</span>
        <br />잘 풀리지 않아도 포기하지 않기
      </div>
      <div className="about__me01__img__inner">
        <img
          className="about__me01__img about__me01__img1 show"
          src="assets/img/me01.jpg"
          alt="내 모습 이미지 01"
        ></img>
        <img
          className="about__me01__img about__me01__img2"
          src="assets/img/me02.jpg"
          alt="내 모습 이미지 02"
        ></img>
        <img
          className="about__me01__img about__me01__img3"
          src="assets/img/me03.jpg"
          alt="내 모습 이미지 03"
        ></img>
      </div>
    </div>
  );
}

export default AboutMe01;
