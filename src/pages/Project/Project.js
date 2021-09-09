import React, { useState } from "react";
import {projectData} from "./data";
import Desktop from "../Home/img/desktop.png";
import "./Project.css"

function Project() {
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
        <div className="grid-project">
          <div className="image-project">
              <img className="port-image" src={appState.activeObject.img} alt="image" />
          </div>
          <div>
            <h3>{appState.activeObject.name}</h3>
            <table id="project-table">
              <tr>
                <th>Deskripsi</th>
                <td>{appState.activeObject.desc}</td>
              </tr>
              <tr>
                <th>Bahasa</th>
                <td>{appState.activeObject.language}</td>
              </tr>
              <tr>
                <th>Teknologi</th>
                <td>{appState.activeObject.tech}</td>
              </tr>
              <tr>
                <th>Website</th>
                <td><a href={appState.activeObject.site} target="_blank">{appState.activeObject.site}</a></td>
              </tr>
            </table>
          </div>
        </div>
      ) : (
        <div className="before-table">
          <h3>My Project</h3>
        </div>
      )}
    </div>
  );
}

export default Project;
