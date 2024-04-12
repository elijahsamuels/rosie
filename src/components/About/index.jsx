import React from "react";
import "./styles.css";
import { aboutRosie } from "./aboutRosie";

const AboutSubject = () => {
  const sections = [];
  for (const entry in aboutRosie) {
    const section = aboutRosie[entry];
    const { title, paragraph } = section;

    sections.push(
      <section className="section" key={title}>
        {title && <h3 className={"subtitle"}>{title}</h3>}
        <p className={"paragraph"}>{paragraph}</p>
      </section>
    );
  }

  return sections;
};

const About = () => {
  return (
    <div className="container">
      <div className="title">About Rosie</div>
      <AboutSubject />
    </div>
  );
};

export default About;
