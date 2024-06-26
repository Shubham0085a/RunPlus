import React from "react";

const Button = () => {
  return (
    <div className="button_container font-montserrat">
      <button className="main_button">
        <span className="button_text">Get a demo</span>
        <div className="button_overlay">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </button>
    </div>
  );
};
export default Button;
