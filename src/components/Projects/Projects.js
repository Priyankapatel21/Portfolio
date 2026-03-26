import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
/* Replace these with your project screenshots in the Assets/Projects folder */
import convodeImg from "../../Assets/Projects/convode.png";
import wanderlustImg from "../../Assets/Projects/wanderlust.png";
import aiInterviewImg from "../../Assets/Projects/ai-interview.png";
import taskManagerImg from "../../Assets/Projects/task-manager.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={convodeImg}
              isBlog={false}
              title="Convode"
              description="A real-time collaborative IDE built with the MERN stack and Socket.io. It features a shared coding environment, integrated Gemini API for AI-driven code suggestions, and Redis for efficient message handling, allowing multiple users to code together seamlessly."
              ghLink="https://github.com/Priyankapatel21/Convode"
              demoLink="https://convode.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiInterviewImg}
              isBlog={false}
              title="AI Interview Prep"
              description="An AI-powered platform designed to help users practice for technical interviews. Built using React.js and Node.js, it leverages the Gemini API to provide real-time feedback on answers and performance analytics."
              ghLink="https://github.com/Priyankapatel21/AI-Interview-Platform"
              demoLink="https://interview-prep-frontend-g8fd.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wanderlustImg}
              isBlog={false}
              title="WanderLust"
              description="A full-stack travel marketplace application developed with Node.js, Express, and MongoDB. Includes features for listing properties, user reviews, and map integration. Focuses on secure authentication and a responsive user experience."
              ghLink="https://github.com/Priyankapatel21/WanderLust"
              demoLink="https://wanderlust-five-orpin.vercel.app/listings"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskManagerImg}
              isBlog={false}
              title="Task Management System"
              description="A robust backend-focused system for managing enterprise tasks. Built with Node.js and MongoDB, it implements complex data relationships and secure API endpoints to track project progress and team assignments efficiently."
              ghLink="https://github.com/Priyankapatel21/Earnest-Fintech-Limited-Task-Management-system"
              demoLink="https://synctask-web.vercel.app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;