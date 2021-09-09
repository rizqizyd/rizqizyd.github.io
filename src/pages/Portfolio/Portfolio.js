import React, { useState } from "react";
import Data, { projectData } from "../Portfolio/data";

function Portfolio() {
  const [appState, setState] = useState({
    activeObject: null,
    objects: projectData,
  });

  function toggleActiveStyles(index) {
    // console.log(activeObject);
    if (appState.objects[index] === appState.activeObject) {
      return "project active";
    } else {
      return "project inactive";
    }
  }

  function toggleTable(index) {
    if (appState.objects[index] === appState.activeObject) {
      return "project active";
    } else {
      return "project inactive";
    }
  }

  function toggleActive(index) {
    setState({ ...appState, activeObject: appState.objects[index] });
  }

  const isTable = appState.activeObject;
  return (
    <div className="portfolio">
      <div className="grid-portfolio">
        {appState.objects.map((data, key) => (
          <div
            key={key}
            className={toggleActiveStyles(key)}
            onClick={() => toggleActive(key)}
          >
            {data.name}
          </div>
        ))}
      </div>

      {isTable ? (
        <div>
          <div>
            <h3 className="image-project">{appState.activeObject.name}</h3>
          </div>
          <div>
            <table id="project-table">
              <tr>
                <th>Name</th>
                <td>{appState.activeObject.name}</td>
              </tr>
              <tr>
                <th>Deskripsi</th>
                <td>{appState.activeObject.desc}</td>
              </tr>
              <tr>
                <th>Teknologi</th>
                <td>{appState.activeObject.tech}</td>
              </tr>
              <tr>
                <th>Website</th>
                <td>{appState.activeObject.site}</td>
              </tr>
            </table>
          </div>
        </div>
      ) : (
        <div className="before-table">
          <h3>My Portfolio</h3>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
