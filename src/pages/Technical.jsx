import React from "react";
import Frontend from "../components/Technical/Frontend";
import Backend from "../components/Technical/Backend";
import SQL from "../components/Technical/SQL";
import AWS from "../components/Technical/AWS";

const Technical = () => {
  return (
    <div className="flex-col w-full max-h-full flex bg-[linear-gradient(135deg,_#f5f7fa_0%,_#c3cfe2_100%)]   ">
      <div className="flex-1 h-44 rounded-2xl px-8 m-10 border-black border-2 py-8 bg-white ">
        <p className="text-xl font-bold">LANGUAGES : </p>
        <div className="flex space-x-8 p-5">
          {/* Python and Java */}
          <div className="text-center">
            <svg
              width="88px"
              height="88px"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454c.771 0 1.395.624 1.395 1.395s-.624 1.395-1.395 1.395a1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
                  fill="url(#a)"
                ></path>
                <path
                  d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395c0-.77.624-1.394 1.395-1.394s1.395.623 1.395 1.394c0 .772-.624 1.395-1.395 1.395z"
                  fill="url(#b)"
                ></path>
                <defs>
                  <linearGradient
                    id="a"
                    x1="19.075"
                    y1="18.782"
                    x2="34.898"
                    y2="34.658"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#387EB8"></stop>
                    <stop offset="1" stopColor="#366994"></stop>
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="28.809"
                    y1="28.882"
                    x2="45.803"
                    y2="45.163"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFE052"></stop>
                    <stop offset="1" stopColor="#FFC331"></stop>
                  </linearGradient>
                </defs>
              </g>
            </svg>
            <p>Python</p>
          </div>
          <div className="text-center">
            <svg
              width="80px"
              height="88px"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M16.0497 8.44062C22.6378 3.32607 19.2566 0 19.2566 0C19.7598 5.28738 13.813 6.53583 12.2189 10.1692C11.1312 12.6485 12.9638 14.8193 16.0475 17.5554C15.7749 16.9494 15.3544 16.3606 14.9288 15.7645C13.4769 13.7313 11.9645 11.6132 16.0497 8.44062Z"
                  fill="#E76F00"
                ></path>{" "}
                <path
                  d="M17.1015 18.677C17.1015 18.677 19.0835 17.0779 17.5139 15.3008C12.1931 9.27186 23.3333 6.53583 23.3333 6.53583C16.5317 9.8125 17.5471 11.7574 19.2567 14.1202C21.0871 16.6538 17.1015 18.677 17.1015 18.677Z"
                  fill="#E76F00"
                ></path>{" "}
                <path
                  d="M22.937 23.4456C29.0423 20.3258 26.2195 17.3278 24.2492 17.7317C23.7662 17.8305 23.5509 17.9162 23.5509 17.9162C23.5509 17.9162 23.7302 17.64 24.0726 17.5204C27.9705 16.1729 30.9682 21.4949 22.8143 23.6028C22.8143 23.6029 22.9088 23.5198 22.937 23.4456Z"
                  fill="#5382A1"
                ></path>{" "}
                <path
                  d="M10.233 19.4969C6.41312 18.9953 12.3275 17.6139 12.3275 17.6139C12.3275 17.6139 10.0307 17.4616 7.20592 18.8043C3.86577 20.3932 15.4681 21.1158 21.474 19.5625C22.0984 19.1432 22.9614 18.7798 22.9614 18.7798C22.9614 18.7798 20.5037 19.2114 18.0561 19.4145C15.0612 19.6612 11.8459 19.7093 10.233 19.4969Z"
                  fill="#5382A1"
                ></path>{" "}
                <path
                  d="M11.6864 22.4758C9.55624 22.2592 10.951 21.2439 10.951 21.2439C5.43898 23.0429 14.0178 25.083 21.7199 22.8682C20.9012 22.5844 20.3806 22.0653 20.3806 22.0653C16.6163 22.7781 14.441 22.7553 11.6864 22.4758Z"
                  fill="#5382A1"
                ></path>{" "}
                <path
                  d="M12.6145 25.6991C10.486 25.4585 11.7295 24.7474 11.7295 24.7474C6.72594 26.1222 14.7729 28.9625 21.1433 26.2777C20.0999 25.8787 19.3528 25.4181 19.3528 25.4181C16.5111 25.9469 15.1931 25.9884 12.6145 25.6991Z"
                  fill="#5382A1"
                ></path>{" "}
                <path
                  d="M25.9387 27.3388C25.9387 27.3388 26.8589 28.0844 24.9252 28.6612C21.2481 29.7566 9.62093 30.0874 6.39094 28.7049C5.22984 28.2082 7.40723 27.5189 8.09215 27.3742C8.80646 27.2219 9.21466 27.2503 9.21466 27.2503C7.9234 26.3558 0.868489 29.0067 5.63111 29.7659C18.6195 31.8372 29.3077 28.8331 25.9387 27.3388Z"
                  fill="#5382A1"
                ></path>{" "}
                <path
                  d="M28 28.9679C27.7869 31.6947 18.7877 32.2683 12.9274 31.8994C9.10432 31.6583 8.33812 31.0558 8.32691 31.047C11.9859 31.6402 18.1549 31.7482 23.1568 30.8225C27.5903 30.0016 28 28.9679 28 28.9679Z"
                  fill="#5382A1"
                ></path>{" "}
              </g>
            </svg>
            <p>Java</p>
          </div>
        </div>
      </div>
      <div className="flex-1 h-44 rounded-2xl px-8 m-10 border-black border-2 py-8 bg-white ">
        <p className="text-xl font-bold">FRONTEND : </p>
       <Frontend/>
      </div>
      <div
        className="flex-1 h-44 rounded-2xl px-8 m-10 border-
     black border-2 py-8 bg-white "
      >
        <p className="text-xl font-bold">BACKEND : </p>
        <Backend/>
      </div>
      <div className="flex-1 h-44 rounded-2xl px-8 m-10 border-black border-2 py-8 bg-white ">
        <p className="text-xl font-bold">SQL : </p>
       <SQL/>
      </div>
      <div className="flex-1 h-44 rounded-2xl px-8 m-10 border-black border-2 py-8 bg-white ">
        <p className="text-xl font-bold">AWS : </p>
        <AWS/>
      </div>
    </div>
  );
};

export default Technical;
