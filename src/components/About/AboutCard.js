import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Priyanka Patel</span>{" "}
            from <span className="purple">Noida, India</span>.
            <br />
            I am currently a Final Year student pursuing a 
            <span className="purple"> B.Tech in Computer Science </span> 
            with a specialization in <span className="purple">AI & ML</span> at 
            <span className="purple"> JSS Academy of Technical Education</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🏀
            </li>
            <li className="about-activity">
              <ImPointRight /> Engaging in Community Outreach 🤝
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;