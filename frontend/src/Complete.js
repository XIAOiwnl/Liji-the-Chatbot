import React from "react";
import "./Complete.css";

const Complete = () => {
  const googleFormLink = process.env.REACT_APP_GOOGLE_FORM_LINK;

  return (
    <div className="complete-container">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl mb-4">Thank you for participating!</h1>
        <p className="text-xl mb-8">
          Please complete the survey by clicking the button below.
        </p>
        <a
          href={googleFormLink}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg"
        >
          Go to survey
        </a>
      </div>
    </div>
  );
};

export default Complete;
