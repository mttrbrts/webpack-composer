
import React from "react";
import ReactDOM from "react-dom";

const ModelManager = require('composer-common').ModelManager;

const mm = new ModelManager();
mm.addModelFile(`
namespace matt.test

concept Matt {
  o String name
}
`, 'test.cto', true);

const listItems = mm.getNamespaces().map((n) =>
  <li>{n}</li>
);

const Index = () => {
    return <ul>{listItems}</ul>;
};

ReactDOM.render(<Index />, document.getElementById("index"));