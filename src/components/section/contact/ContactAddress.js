import React from "react";

function ContactAddress() {
  return (
    <div className="contact__address__section container">
      <div className="contact__tag tada">
        <svg
          width="279"
          height="70"
          viewBox="0 0 279 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 5C0 2.23857 2.23858 0 5 0H247.477C248.93 0 250.311 0.631969 251.261 1.73144L277.176 31.7314C278.798 33.6088 278.798 36.3913 277.176 38.2686L251.261 68.2686C250.311 69.368 248.93 70 247.477 70H5C2.23858 70 0 67.7614 0 65V35V5Z"
            fill="#FFB800"
          />
        </svg>
        <div className="contact__tag__txt">CONTACT ME !</div>
      </div>
      <ul>
        <li>
          <div className="contact__tag__tit">Email</div>
          <a href="mailto:hjkang306@gmail.com">hjkang306@gmail.com</a>
        </li>
        <li>
          <div className="contact__tag__tit">Blog</div>
          <a href="hjkang306.tistory.com">hjkang306.tistory.com</a>
        </li>
        <li>
          <div className="contact__tag__tit">Github</div>
          <a href="github.com/hjkang306">github.com/hjkang306</a>
        </li>
      </ul>
    </div>
  );
}

export default ContactAddress;
