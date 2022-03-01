import React from "react";
import aboutImage from "../../images/about-image.png";

function About() {
  return (
    <aside className="about">
      <img
        src={aboutImage}
        alt="Woman sitting on grass, meditating"
        className="about__image"
      />
      <div className="about__bio">
        <h2 className="about__title">About the author</h2>
        <div className="about__text">
          <p>
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
          </p>
          <p>
            You can also talk about your experience with Practicum, what you
            learned there, and how you can help potential customers.
          </p>
        </div>
      </div>
    </aside>
  );
}

export { About };
