import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="contact__title__section">
        <div className="move__text__inner">
          <h3 className="contact__title animation01">
            CONTACT • CONTACT •&nbsp;
          </h3>
          <h3 className="contact__title animation01">
            CONTACT • CONTACT •&nbsp;
          </h3>
        </div>
        <div className="figure__inner">
          <div className="contactDecoInner">
            <div className="star rotateY">*</div>
            <div className="hover__txt">thank you !</div>
          </div>
          <div className="figure figure1">
            <img src="assets/img/kang01.png" alt="내 모습 이미지" />
          </div>
          <div className="figure figure2 headShake"></div>
          <div className="figure figure3 headShake"></div>
          <div className="figure figure4 headShake"></div>
          <div className="figure figure5 headShake"></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
