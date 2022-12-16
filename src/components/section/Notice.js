import React from "react";

function Notice() {
  return (
    <div className="notice">
      <h3 className="notice__tit">check point !</h3>
      <p className="notice__txt">
        안녕하세요, 반갑습니다! 이 페이지는{" "}
        <span className="point__color">드래그 앤 드롭</span> 기능이 곳곳에
        들어있습니다. 재미있는 요소도 많이 숨겨 두었으니, 하나씩 찾아보며
        즐겨주세요!
      </p>
      <button className="notice__close" type="button">
        확인!
      </button>
    </div>
  );
}

export default Notice;
