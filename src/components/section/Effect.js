import React from "react";

function Effect() {
  return (
    <section id="effect">
      <article className="effect__title__section">
        <div className="move__text__inner">
          <h3 className="effect__title animation01">
            javascript • Effect • javascript • Effect •&nbsp;
          </h3>
          <h3 className="effect__title animation01">
            javascript • Effect • javascript • Effect •&nbsp;
          </h3>
        </div>
        <div className="figure__inner">
          <div className="figure figure1"></div>
          <div className="figure figure2"></div>
          <div className="figure figure3"></div>
          <div className="figure figure4"></div>
          <div className="figure figure5"></div>
          <div className="figure figure6"></div>
          <div className="figure figure7"></div>
          <div className="figure figure8"></div>
        </div>
      </article>
      {/* //effect__title__section */}

      <article id="search__effect" className="effect__section section">
        <div className="left">
          <div className="effect__decos">
            <div className="effect__deco01">
              <svg
                width="151"
                height="71"
                viewBox="0 0 151 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.950928 0.973877H150.951V16.604C142.325 18.8242 135.951 26.6547 135.951 35.9739C135.951 45.2931 142.325 53.1236 150.951 55.3438V70.9739H0.950928L0.950928 55.3438C9.57706 53.1236 15.9509 45.2931 15.9509 35.9739C15.9509 26.6547 9.57706 18.8242 0.950928 16.604L0.950928 0.973877Z"
                  fill="#FF8A00"
                />
              </svg>
              <div className="effect__deco01__txt">effect</div>
            </div>
            <div className="effect__deco02">
              <svg
                width="223"
                height="71"
                viewBox="0 0 223 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.9051 2.2575C31.8523 1.22147 33.1914 0.631348 34.5952 0.631348H217.392C220.153 0.631348 222.392 2.86992 222.392 5.63135V65.6313C222.392 68.3928 220.153 70.6313 217.392 70.6313H34.5952C33.1914 70.6313 31.8523 70.0412 30.9051 69.0052L3.47651 39.0052C1.73003 37.095 1.73003 34.1677 3.4765 32.2575L30.9051 2.2575Z"
                  fill="#FFB800"
                />
              </svg>
              <div className="effect__deco02__txt">search</div>
            </div>
          </div>
          <p className="effect__desc">
            indexOf(), search() 등 문자열과 관련된 메서드를 이용하여 검색어를
            입력하면 결과가 나오는, 검색을 할 수 있는 효과를 만들어 보았습니다.
          </p>
          <h3 className="effect__tit">
            <em>SEARCH</em>
            <br />
            Effect
          </h3>
        </div>
        <details className="effect__img__wrap drag" open>
          <summary className="effect__img__tit">javascript</summary>
          <a
            href="http://hjkang306.dothome.co.kr/javascript/effect/searchEffect05.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets/img/effect01.jpg" alt="코딩 이미지01" />
            <div className="effect__btn">Go !</div>
          </a>
        </details>
      </article>
      {/* //search__effect */}

      <article id="quiz__effect" className="effect__section section">
        <div className="left">
          <div className="effect__decos">
            <div className="effect__deco01">
              <svg
                width="151"
                height="71"
                viewBox="0 0 151 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.950928 0.973877H150.951V16.604C142.325 18.8242 135.951 26.6547 135.951 35.9739C135.951 45.2931 142.325 53.1236 150.951 55.3438V70.9739H0.950928L0.950928 55.3438C9.57706 53.1236 15.9509 45.2931 15.9509 35.9739C15.9509 26.6547 9.57706 18.8242 0.950928 16.604L0.950928 0.973877Z"
                  fill="#FF8A00"
                />
              </svg>
              <div className="effect__deco01__txt">effect</div>
            </div>
            <div className="effect__deco02">
              <svg
                width="223"
                height="71"
                viewBox="0 0 223 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.9051 2.2575C31.8523 1.22147 33.1914 0.631348 34.5952 0.631348H217.392C220.153 0.631348 222.392 2.86992 222.392 5.63135V65.6313C222.392 68.3928 220.153 70.6313 217.392 70.6313H34.5952C33.1914 70.6313 31.8523 70.0412 30.9051 69.0052L3.47651 39.0052C1.73003 37.095 1.73003 34.1677 3.4765 32.2575L30.9051 2.2575Z"
                  fill="#FFB800"
                />
              </svg>
              <div className="effect__deco02__txt">quiz</div>
            </div>
          </div>
          <p className="effect__desc">
            배열과 객체를 활용하여 각각의 요소에 문제를 출력하고, 메서드를
            사용하여 정답을 확인하고 점수를 출력하는 효과를 만들어 보았습니다.
          </p>
          <h3 className="effect__tit">
            <em>quiz</em>
            <br />
            Effect
          </h3>
        </div>
        <details className="effect__img__wrap drag" open>
          <summary className="effect__img__tit">javascript</summary>
          <a
            href="http://hjkang306.dothome.co.kr/javascript/effect/quizEffect05.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets/img/effect02.jpg" alt="코딩 이미지02" />
            <div className="effect__btn">Go !</div>
          </a>
        </details>
      </article>
      {/* //quiz__effect */}

      <article id="mouse__effect" className="effect__section section">
        <div className="left">
          <div className="effect__decos">
            <div className="effect__deco01">
              <svg
                width="151"
                height="71"
                viewBox="0 0 151 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.950928 0.973877H150.951V16.604C142.325 18.8242 135.951 26.6547 135.951 35.9739C135.951 45.2931 142.325 53.1236 150.951 55.3438V70.9739H0.950928L0.950928 55.3438C9.57706 53.1236 15.9509 45.2931 15.9509 35.9739C15.9509 26.6547 9.57706 18.8242 0.950928 16.604L0.950928 0.973877Z"
                  fill="#FF8A00"
                />
              </svg>
              <div className="effect__deco01__txt">effect</div>
            </div>
            <div className="effect__deco02">
              <svg
                width="223"
                height="71"
                viewBox="0 0 223 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.9051 2.2575C31.8523 1.22147 33.1914 0.631348 34.5952 0.631348H217.392C220.153 0.631348 222.392 2.86992 222.392 5.63135V65.6313C222.392 68.3928 220.153 70.6313 217.392 70.6313H34.5952C33.1914 70.6313 31.8523 70.0412 30.9051 69.0052L3.47651 39.0052C1.73003 37.095 1.73003 34.1677 3.4765 32.2575L30.9051 2.2575Z"
                  fill="#FFB800"
                />
              </svg>
              <div className="effect__deco02__txt">mouse</div>
            </div>
          </div>
          <p className="effect__desc">
            마우스 커서의 위치를 구하고 해당하는 값을 이용하여 이미지나 글씨를
            움직이고, 마우스를 따라다니는 원을 만들어보았습니다.
          </p>
          <h3 className="effect__tit">
            <em>mouse</em>
            <br />
            Effect
          </h3>
        </div>
        <details className="effect__img__wrap drag" open>
          <summary className="effect__img__tit">javascript</summary>
          <a
            href="http://hjkang306.dothome.co.kr/javascript/effect/mouseEffect01.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets/img/effect03.jpg" alt="코딩 이미지03" />
            <div className="effect__btn">Go !</div>
          </a>
        </details>
      </article>
      {/* //mouse__effect */}

      <article id="slider__effect" className="effect__section section">
        <div className="left">
          <div className="effect__decos">
            <div className="effect__deco01">
              <svg
                width="151"
                height="71"
                viewBox="0 0 151 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.950928 0.973877H150.951V16.604C142.325 18.8242 135.951 26.6547 135.951 35.9739C135.951 45.2931 142.325 53.1236 150.951 55.3438V70.9739H0.950928L0.950928 55.3438C9.57706 53.1236 15.9509 45.2931 15.9509 35.9739C15.9509 26.6547 9.57706 18.8242 0.950928 16.604L0.950928 0.973877Z"
                  fill="#FF8A00"
                />
              </svg>
              <div className="effect__deco01__txt">effect</div>
            </div>
            <div className="effect__deco02">
              <svg
                width="223"
                height="71"
                viewBox="0 0 223 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.9051 2.2575C31.8523 1.22147 33.1914 0.631348 34.5952 0.631348H217.392C220.153 0.631348 222.392 2.86992 222.392 5.63135V65.6313C222.392 68.3928 220.153 70.6313 217.392 70.6313H34.5952C33.1914 70.6313 31.8523 70.0412 30.9051 69.0052L3.47651 39.0052C1.73003 37.095 1.73003 34.1677 3.4765 32.2575L30.9051 2.2575Z"
                  fill="#FFB800"
                />
              </svg>
              <div className="effect__deco02__txt">slider</div>
            </div>
          </div>
          <p className="effect__desc">
            이미지를 좌우로 넘기거나, 자동으로 넘어가는 슬라이드 효과를
            자바스크립트로 만들어 보았습니다.
          </p>
          <h3 className="effect__tit">
            <em>slider</em>
            <br />
            Effect
          </h3>
        </div>
        <details className="effect__img__wrap drag" open>
          <summary className="effect__img__tit">javascript</summary>
          <a
            href="http://hjkang306.dothome.co.kr/javascript/effect/sliderEffect01.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets/img/effect04.jpg" alt="코딩 이미지04" />
            <div className="effect__btn">Go !</div>
          </a>
        </details>
      </article>
      {/* //slider__effect */}

      <article id="parallax__effect" className="effect__section section">
        <div className="left">
          <div className="effect__decos">
            <div className="effect__deco01">
              <svg
                width="151"
                height="71"
                viewBox="0 0 151 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.950928 0.973877H150.951V16.604C142.325 18.8242 135.951 26.6547 135.951 35.9739C135.951 45.2931 142.325 53.1236 150.951 55.3438V70.9739H0.950928L0.950928 55.3438C9.57706 53.1236 15.9509 45.2931 15.9509 35.9739C15.9509 26.6547 9.57706 18.8242 0.950928 16.604L0.950928 0.973877Z"
                  fill="#FF8A00"
                />
              </svg>
              <div className="effect__deco01__txt">effect</div>
            </div>
            <div className="effect__deco02">
              <svg
                width="223"
                height="71"
                viewBox="0 0 223 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.9051 2.2575C31.8523 1.22147 33.1914 0.631348 34.5952 0.631348H217.392C220.153 0.631348 222.392 2.86992 222.392 5.63135V65.6313C222.392 68.3928 220.153 70.6313 217.392 70.6313H34.5952C33.1914 70.6313 31.8523 70.0412 30.9051 69.0052L3.47651 39.0052C1.73003 37.095 1.73003 34.1677 3.4765 32.2575L30.9051 2.2575Z"
                  fill="#FFB800"
                />
              </svg>
              <div className="effect__deco02__txt">parallax</div>
            </div>
          </div>
          <p className="effect__desc">
            페이지에서 스크롤 값에 따라 글씨가 나타나거나 메뉴가 사라지고,
            이미지의 이질감이 느껴지는 등의 패럴랙스 효과를 만들어 보았습니다.
          </p>
          <h3 className="effect__tit">
            <em>parallax</em>
            <br />
            Effect
          </h3>
        </div>
        <details className="effect__img__wrap drag" open>
          <summary className="effect__img__tit">javascript</summary>
          <a
            href="http://hjkang306.dothome.co.kr/javascript/effect/parallaxEffect01.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets/img/effect05.jpg" alt="코딩 이미지05" />
            <div className="effect__btn">Go !</div>
          </a>
        </details>
      </article>
      {/* //parallax__effect */}

      <article id="game__effect" className="effect__section section">
        <div className="left">
          <div className="effect__decos">
            <div className="effect__deco01">
              <svg
                width="151"
                height="71"
                viewBox="0 0 151 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.950928 0.973877H150.951V16.604C142.325 18.8242 135.951 26.6547 135.951 35.9739C135.951 45.2931 142.325 53.1236 150.951 55.3438V70.9739H0.950928L0.950928 55.3438C9.57706 53.1236 15.9509 45.2931 15.9509 35.9739C15.9509 26.6547 9.57706 18.8242 0.950928 16.604L0.950928 0.973877Z"
                  fill="#FF8A00"
                />
              </svg>
              <div className="effect__deco01__txt">effect</div>
            </div>
            <div className="effect__deco02">
              <svg
                width="223"
                height="71"
                viewBox="0 0 223 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.9051 2.2575C31.8523 1.22147 33.1914 0.631348 34.5952 0.631348H217.392C220.153 0.631348 222.392 2.86992 222.392 5.63135V65.6313C222.392 68.3928 220.153 70.6313 217.392 70.6313H34.5952C33.1914 70.6313 31.8523 70.0412 30.9051 69.0052L3.47651 39.0052C1.73003 37.095 1.73003 34.1677 3.4765 32.2575L30.9051 2.2575Z"
                  fill="#FFB800"
                />
              </svg>
              <div className="effect__deco02__txt">game</div>
            </div>
          </div>
          <p className="effect__desc">
            공부한 자바스크립트 지식을 총 출동하여 테트리스, 카드 뒤집기, 용어
            맞추기 등의 간단한 게임 효과를 만들어 보았습니다.
          </p>
          <h3 className="effect__tit">
            <em>game</em>
            <br />
            Effect
          </h3>
        </div>
        <details className="effect__img__wrap drag" open>
          <summary className="effect__img__tit">javascript</summary>
          <a
            href="http://hjkang306.dothome.co.kr/javascript/effect/gameEffect01.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets/img/effect06.jpg" alt="코딩 이미지06" />
            <div className="effect__btn">Go !</div>
          </a>
        </details>
      </article>
      {/* //game__effect */}
    </section>
  );
}

export default Effect;
