import React from "react";

export default function Skills() {
  return (
    <div className="skills">
      <h5 className="font-bold text-white text-lg text-center lg:text-start mb-3">
        Tech Stacks
      </h5>
      <div className="skill-detail flex flex-wrap justify-center lg:justify-start gap-3">
        <img src="/skills/html-css-js.webp" alt="html-css-js" />
        <img src="/skills/typescript.webp" alt="typescript" />
        <img src="/skills/react.webp" alt="react" />
        <img src="/skills/next.webp" alt="next" />
        <img src="/skills/vue.webp" alt="vue" />
        <img src="/skills/nuxt.webp" alt="nuxt" />
        <img src="/skills/nodejs.webp" alt="nodejs" />
        <img src="/skills/jest.webp" alt="jest" />
        <img src="/skills/python.webp" alt="python" />
      </div>
    </div>
  );
}
