import React from "react";

export default function Skills() {
  return (
    <div className="skills">
      <h5 className="font-bold text-navy text-lg text-center lg:text-start mb-3">
        Tech Stacks
      </h5>
      <div className="skill-detail flex flex-wrap justify-center lg:justify-start gap-3">
        <img src="/skills/typescript.webp" alt="typescript" />
        <img src="/skills/react.webp" alt="react" />
        <img src="/skills/vue.webp" alt="vue" />
        <img src="/skills/nodejs.webp" alt="nodejs" />
        <img src="/skills/jest.webp" alt="jest" />
        <img src="/skills/kubernetes.webp" alt="kubernetes" />
        <img src="/skills/python.webp" alt="python" />
      </div>
    </div>
  );
}
