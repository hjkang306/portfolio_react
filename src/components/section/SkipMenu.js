import React from "react";

function SkipMenu() {
  return (
    <div id="skip">
      <a href="#home">home 바로 가기</a>
      <a href="#about">about 바로 가기</a>
      <a href="#effect">effect 영역 바로 가기</a>
      <a href="#react" className="reactNav">
        react 영역 바로 가기
      </a>
      <a href="#vue" className="vueNav">
        vue 영역 바로 가기
      </a>
      <a href="#php" className="phpNav">
        php 영역 바로 가기
      </a>
      <a href="#contact">contact 바로 가기</a>
    </div>
  );
}

export default SkipMenu;
