import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import Button from "./components/Button";
import Icon from "./components/Icon";

const App = () => (
  <div>
    <h1>Button App</h1>
    <div>
      <label htmlFor="download" className="label">
        <input type="text" id="download"/>
        <span className="input-icon">
          <Icon icon="download" type="primary" />
        </span>
      </label>
      <label htmlFor="arrow" className="label">
        <input type="text" id="arrow"/>
        <span className="input-icon">
          <Icon icon="arrow" type="primary" />
        </span>
      </label>
      <label htmlFor="loading" className="label">
        <input type="text" id="loading"/>
        <span className="input-icon">
          <Icon icon="loading" type="primary" />
        </span>
      </label>
    </div>
    <Button
      icon="arrow"
      text="Descargar Soat"
      size="medium"
      type="secondary"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
